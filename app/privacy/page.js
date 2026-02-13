export const metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <section className="section page-top">
      <div className="container legal-wrap">
        <h1>Privacy Policy</h1>
        <p>We keep this clear and practical.</p>

        <h3>What we collect</h3>
        <p>
          We collect account info, conversation data needed to provide features,
          and billing metadata processed by Stripe.
        </p>

        <h3>How we use data</h3>
        <p>
          Data is used to deliver functionality, improve product quality, and
          maintain service reliability and security.
        </p>

        <h3>Your controls</h3>
        <p>
          You can request updates or deletion of your account data by contacting
          support at support@ditch.app.
        </p>
      </div>
    </section>
  );
}
