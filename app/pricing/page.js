import PricingToggle from "../../components/PricingToggle";

export const metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return (
    <section className="section page-top">
      <div className="container">
        <h1>Pricing</h1>
        <p className="lead">Simple subscriptions. Secure checkout. Cancel anytime.</p>
        <PricingToggle />
      </div>
    </section>
  );
}
