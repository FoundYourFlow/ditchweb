export const metadata = {
  title: "FAQ",
};

export default function FaqPage() {
  return (
    <section className="section page-top">
      <div className="container faq-page">
        <h1>FAQ</h1>
        <details className="faq-item" open>
          <summary>What can Ditch do?</summary>
          <p>
            Ditch helps with reminders, check-ins, scheduling, web research, and
            file analysis across images, PDFs, and spreadsheets.
          </p>
        </details>
        <details className="faq-item">
          <summary>Are my messages private and secure?</summary>
          <p>
            Yes. Ditch is built with privacy-first practices, encrypted
            communication, and controlled data handling with user memory controls.
          </p>
        </details>
        <details className="faq-item">
          <summary>Are payments secure?</summary>
          <p>Yes. Billing is processed securely through Stripe.</p>
        </details>
        <details className="faq-item">
          <summary>What is the cancellation policy?</summary>
          <p>You can cancel anytime. No long-term lock-in.</p>
        </details>
        <details className="faq-item">
          <summary>How is data privacy protected?</summary>
          <p>
            Ditch stores only what is needed for service quality and gives users
            controls over stored context.
          </p>
        </details>
      </div>
    </section>
  );
}
