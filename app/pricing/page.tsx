import type { Metadata } from "next";

import { PricingToggleCard } from "@/components/pricing-toggle-card";

export const metadata: Metadata = {
  title: "Pricing"
};

export default function PricingPage() {
  return (
    <section className="section page-section">
      <div className="container narrow">
        <h1 className="page-title centered">Pricing</h1>
        <PricingToggleCard />
        <div className="env-note">
          <p>Stripe environment variables needed:</p>
          <ul>
            <li>
              <code>STRIPE_SECRET_KEY</code>
            </li>
            <li>
              <code>NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code>
            </li>
            <li>
              <code>STRIPE_MONTHLY_AMOUNT_CENTS</code> (default: 1499)
            </li>
            <li>
              <code>STRIPE_YEARLY_AMOUNT_CENTS</code> (default: 8994)
            </li>
            <li>
              <code>NEXT_PUBLIC_APP_URL</code>
            </li>
          </ul>
          <p>
            Optional instead of amount vars: <code>STRIPE_PRICE_MONTHLY</code> and <code>STRIPE_PRICE_YEARLY</code>.
          </p>
        </div>
      </div>
    </section>
  );
}
