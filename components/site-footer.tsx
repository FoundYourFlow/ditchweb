import Link from "next/link";

import { footerLinks, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-block">
          <p className="footer-title">{siteConfig.name}</p>
          <p className="footer-meta">{siteConfig.domain}</p>
          <a className="footer-meta" href={`mailto:${siteConfig.supportEmail}`}>
            {siteConfig.supportEmail}
          </a>
        </div>

        <div className="footer-block">
          <p className="footer-title">Links</p>
          <ul className="footer-links">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-block newsletter-block">
          <p className="footer-title">Join our newsletter</p>
          <p className="footer-help">Monthly product updates, practical workflows, and feature notes.</p>
          <form className="newsletter-form" action="#" method="post">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              placeholder="you@company.com"
              required
            />
            <button type="submit" className="button button-solid">
              Join
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
