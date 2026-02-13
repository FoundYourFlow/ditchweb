import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="section hero">
        <div className="container">
          <p className="eyebrow">Messaging-native assistant</p>
          <h1>AI in your messages. No apps required.</h1>
          <p className="lead">
            Ditch helps you plan, research, and decide faster in one conversation.
          </p>
          <div className="actions">
            <Link className="btn btn-primary" href="/pricing">
              See Pricing
            </Link>
            <Link className="btn btn-secondary" href="/#how">
              How It Works
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="problem-outcome">
        <div className="container">
          <h2>Problem to Outcome</h2>
          <div className="grid two">
            <article className="card">
              <h3>The problem</h3>
              <p>
                People switch between too many tools for reminders, calendar,
                search, and support. Context gets fragmented.
              </p>
            </article>
            <article className="card">
              <h3>The outcome with Ditch</h3>
              <p>
                One thread handles everything. You get clear outputs and next
                actions faster with less friction.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="container">
          <h2>Core Features</h2>
          <div className="grid three">
            <article className="card">
              <h3>Messaging-first</h3>
              <p>Text in and get structured, useful responses immediately.</p>
            </article>
            <article className="card">
              <h3>Calendar support</h3>
              <p>Manage schedule and reminders directly in conversation.</p>
            </article>
            <article className="card">
              <h3>Content analysis</h3>
              <p>Analyze images, PDFs, spreadsheets, docs, and screenshots.</p>
            </article>
            <article className="card">
              <h3>Personalized memory</h3>
              <p>Remembers your context and preferences over time.</p>
            </article>
            <article className="card">
              <h3>Privacy-first security</h3>
              <p>Encrypted communication with controlled data handling.</p>
            </article>
            <article className="card">
              <h3>Intelligent routing</h3>
              <p>Each task is routed to the best model for reliability.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="how">
        <div className="container">
          <h2>How It Works</h2>
          <div className="grid three">
            <article className="card">
              <h3>1. Send a message</h3>
              <p>Share text, voice, photos, or files.</p>
            </article>
            <article className="card">
              <h3>2. Ditch processes</h3>
              <p>It routes tasks to the right tools and formats the result.</p>
            </article>
            <article className="card">
              <h3>3. Take action</h3>
              <p>Use clear recommendations, summaries, and next steps.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="testimonials">
        <div className="container">
          <h2>Customer testimonials</h2>
          <div className="grid three">
            {[
              ["Jordan T.", "Founder", "Ditch replaced three apps for me."],
              ["Maya R.", "Product Manager", "The screenshot and PDF analysis saves me hours."],
              ["Chris L.", "Student", "One place for reminders, research, and planning."],
            ].map(([name, role, text]) => (
              <article className="card" key={name}>
                <p className="stars">★★★★★</p>
                <p>{`\"${text}\"`}</p>
                <p className="muted">{name} | {role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="faq-home">
        <div className="container">
          <h2>FAQ</h2>
          <details className="faq-item" open>
            <summary>What can Ditch do?</summary>
            <p>
              Ditch helps with reminders, check-ins, scheduling, and analysis
              across images, docs, and files in one chat.
            </p>
          </details>
          <details className="faq-item">
            <summary>Are my messages private and secure?</summary>
            <p>
              Yes. Ditch is built with privacy-first practices, encrypted
              communication, and controlled data handling.
            </p>
          </details>
          <details className="faq-item">
            <summary>Can I cancel anytime?</summary>
            <p>Yes. You can cancel anytime with no long-term lock-in.</p>
          </details>
          <p className="more-link">
            <Link href="/faq">See full FAQ</Link>
          </p>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container card cta-card">
          <h2>Ready to simplify your daily workflow?</h2>
          <p>Start with Ditch and keep everything in one conversation.</p>
          <Link className="btn btn-primary" href="/pricing">
            Get Started
          </Link>
        </div>
      </section>

      <section className="section" id="newsletter">
        <div className="container card newsletter">
          <h2>Join the newsletter</h2>
          <p className="muted">Product updates and practical AI workflows.</p>
          <form className="newsletter-form">
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>
            <input id="newsletter-email" type="email" placeholder="you@company.com" required />
            <button type="submit" className="btn btn-primary">
              Join
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
