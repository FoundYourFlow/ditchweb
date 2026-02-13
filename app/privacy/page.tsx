import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy"
};

export default function PrivacyPage() {
  return (
    <section className="section page-section">
      <div className="container narrow legal-page">
        <h1 className="page-title">Privacy Policy</h1>
        <p>
          Ditch is designed around privacy-first handling. We collect only the data required to operate service
          features, improve reliability, and support your account.
        </p>
        <h2>Data Collection</h2>
        <p>
          We collect account information, billing metadata, and service usage events needed for product delivery and
          support.
        </p>
        <h2>Data Usage</h2>
        <p>
          Data is used to provide sorting, triage, support, and security protections. We do not sell personal
          information.
        </p>
        <h2>Controls</h2>
        <p>
          You can request export or deletion of account data by contacting support@ditch.app.
        </p>
      </div>
    </section>
  );
}
