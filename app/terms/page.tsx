import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms"
};

export default function TermsPage() {
  return (
    <section className="section page-section">
      <div className="container narrow legal-page">
        <h1 className="page-title">Terms of Service</h1>
        <p>
          By using Ditch, you agree to these terms governing account usage, billing, and acceptable service behavior.
        </p>
        <h2>Accounts</h2>
        <p>
          You are responsible for safeguarding account credentials and for activities occurring under your account.
        </p>
        <h2>Billing</h2>
        <p>
          Paid plans are billed through Stripe. You can cancel anytime, and access remains through your current billing
          period.
        </p>
        <h2>Service Use</h2>
        <p>
          You agree not to misuse the service, interfere with platform operation, or attempt unauthorized data access.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to support@ditch.app.
        </p>
      </div>
    </section>
  );
}
