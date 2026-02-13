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
        </div>
      </div>
      <div className="container footer-bottom">
        <p className="muted">© {new Date().getFullYear()} Ditch. All rights reserved.</p>
      </div>
    </footer>
  );
}
