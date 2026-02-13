import { NextResponse } from "next/server";
import Stripe from "stripe";

type CheckoutBody = {
  billing?: "monthly" | "yearly";
};

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const fallbackMonthlyCents = Number(process.env.STRIPE_MONTHLY_AMOUNT_CENTS ?? "1499");
const fallbackYearlyCents = Number(process.env.STRIPE_YEARLY_AMOUNT_CENTS ?? "8994");

const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      apiVersion: "2025-04-30.basil"
    })
  : null;

export async function POST(request: Request) {
  if (!stripe) {
    return NextResponse.json(
      {
        error: "Stripe is not configured yet. Add STRIPE_SECRET_KEY first."
      },
      { status: 500 }
    );
  }

  const body = (await request.json()) as CheckoutBody;
  const billing = body.billing === "yearly" ? "yearly" : "monthly";

  const priceId = billing === "yearly" ? process.env.STRIPE_PRICE_YEARLY : process.env.STRIPE_PRICE_MONTHLY;
  const interval = billing === "yearly" ? "year" : "month";
  const amountInCents = billing === "yearly" ? fallbackYearlyCents : fallbackMonthlyCents;
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://ditch.app";

  if (!priceId && (!Number.isInteger(amountInCents) || amountInCents <= 0)) {
    return NextResponse.json(
      {
        error: `Missing Stripe ${billing} price config. Set ${billing === "yearly" ? "STRIPE_PRICE_YEARLY" : "STRIPE_PRICE_MONTHLY"} or a valid cents amount env var.`
      },
      { status: 500 }
    );
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: priceId
        ? [{ price: priceId, quantity: 1 }]
        : [
            {
              price_data: {
                currency: "usd",
                unit_amount: amountInCents,
                recurring: {
                  interval
                },
                product_data: {
                  name: billing === "yearly" ? "Ditch Yearly" : "Ditch Monthly"
                }
              },
              quantity: 1
            }
          ],
      success_url: `${appUrl}/pricing?checkout=success`,
      cancel_url: `${appUrl}/pricing?checkout=cancelled`
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Stripe checkout could not be created."
      },
      { status: 500 }
    );
  }
}
