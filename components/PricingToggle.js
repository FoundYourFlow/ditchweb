"use client";

import { useMemo, useState } from "react";

const PLANS = {
  monthly: {
    label: "Monthly",
    price: "$14.99",
    period: "/month",
    badge: "Standard",
    cta: "Choose Monthly",
    points: ["AI in your messages", "Photo and screenshot analysis", "Cancel anytime"],
  },
  yearly: {
    label: "Yearly",
    price: "$89.94",
    period: "/year",
    badge: "50% Off",
    cta: "Choose Yearly",
    points: ["Everything in monthly", "Best annual value", "Save 50% vs monthly billing"],
  },
};

export default function PricingToggle() {
  const [billing, setBilling] = useState("monthly");
  const plan = useMemo(() => PLANS[billing], [billing]);

  return (
    <section className="pricing-shell">
      <div className="billing-toggle" role="tablist" aria-label="Billing period">
        <button
          type="button"
          className={billing === "monthly" ? "is-active" : ""}
          aria-pressed={billing === "monthly"}
          onClick={() => setBilling("monthly")}
        >
          Monthly
        </button>
        <button
          type="button"
          className={billing === "yearly" ? "is-active" : ""}
          aria-pressed={billing === "yearly"}
          onClick={() => setBilling("yearly")}
        >
          Yearly
        </button>
      </div>

      <article className="card plan-card">
        <p className="pill">{plan.badge}</p>
        <h2>{plan.label}</h2>
        <p className="price">
          <strong>{plan.price}</strong>
          <span>{plan.period}</span>
        </p>
        <ul>
          {plan.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <a className="btn btn-primary" href="/contact">
          {plan.cta}
        </a>
      </article>
    </section>
  );
}
