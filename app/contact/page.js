export const metadata = {
  title: "Contact & Support",
};

export default function ContactPage() {
  return (
    <section className="section page-top">
      <div className="container support-wrap">
        <h1>Contact & Support</h1>
        <p className="lead">Tell us what you need help with and we will reply quickly.</p>

        <form className="support-form">
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" type="email" placeholder="you@company.com" required />

          <label htmlFor="contact-issue">Issue</label>
          <textarea
            id="contact-issue"
            placeholder="Describe the issue, billing question, or support request"
            rows={6}
            required
          />

          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>

        <p className="muted">
          You can also email <a href="mailto:support@ditch.app">support@ditch.app</a>
        </p>
      </div>
    </section>
  );
}
