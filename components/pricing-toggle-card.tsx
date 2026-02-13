"use client";

import { useMemo, useState } from "react";

type BillingCycle = "monthly" | "yearly";

type PlanCopy = {
  amount: string;
  period: string;
  helper: string;
};

const planDetails: Record<BillingCycle, PlanCopy> = {
  monthly: {
    amount: "$14.99",
    period: "/month",
    helper: "Billed monthly"
  },
  yearly: {
    amount: "$89.94",
    period: "/year",
    helper: "50% off vs monthly annualized"
  }
};

export function PricingToggleCard() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const selectedPlan = useMemo(() => planDetails[billing], [billing]);

  const handleCheckout = async () => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ billing })
      });

      const payload = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !payload.url) {
        throw new Error(payload.error || "Checkout setup is incomplete.");
      }

      window.location.href = payload.url;
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to start checkout.");
      setIsLoading(false);
    }
  };

  return (
    <div className="pricing-card" role="region" aria-label="Pricing plan selector">
      <div className="billing-toggle" role="tablist" aria-label="Billing cycle">
        <button
          type="button"
          role="tab"
          className={`billing-pill ${billing === "monthly" ? "active" : ""}`}
          aria-selected={billing === "monthly"}
          onClick={() => setBilling("monthly")}
        >
          Monthly
        </button>
        <button
          type="button"
          role="tab"
          className={`billing-pill ${billing === "yearly" ? "active" : ""}`}
          aria-selected={billing === "yearly"}
          onClick={() => setBilling("yearly")}
        >
          Yearly
        </button>
      </div>

      <p className="price-line">
        <span>{selectedPlan.amount}</span>
        <span>{selectedPlan.period}</span>
      </p>
      <p className="price-helper">{selectedPlan.helper}</p>
      <p className="cancel-note">Cancel anytime.</p>

      <button className="button button-solid checkout-button" type="button" onClick={handleCheckout}>
        {isLoading ? "Redirecting..." : "Start with Stripe"}
      </button>

      {errorMessage ? <p className="form-feedback">{errorMessage}</p> : null}

      <p className="stripe-note">
        Requires Stripe configuration in environment variables before production checkout can run.
      </p>
    </div>
  );
}
