import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand" href="/">
            Ditch
          </Link>
          <p className="muted">AI in your messages. No apps required.</p>
        </div>
        <div className="footer-links">
          <Link href="/pricing">Pricing</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact & Support</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
        <div className="footer-links">
          <a href="mailto:support@ditch.app">support@ditch.app</a>
          <a href="https://ditch.app" target="_blank" rel="noreferrer">
            ditch.app
          </a>
          <div className="footer-newsletter-card">
            <p className="footer-newsletter-title">Join our newsletter</p>
            <p className="muted">Product updates and practical AI tips.</p>
            <form className="newsletter-form footer-newsletter-form">
              <label htmlFor="footer-newsletter-email" className="sr-only">
                Email
              </label>
              <input
                id="footer-newsletter-email"
                type="email"
                placeholder="Email for updates"
                required
              />
              <button type="submit" className="btn btn-primary">
                Join
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p className="muted">© {new Date().getFullYear()} Ditch. All rights reserved.</p>
      </div>
    </footer>
  );
}
