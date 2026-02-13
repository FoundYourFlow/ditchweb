import Link from "next/link";

import { siteConfig } from "@/lib/site";

const navItems = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" }
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand-mark" aria-label={`${siteConfig.name} home`}>
          {siteConfig.name}
        </Link>
        <nav aria-label="Primary" className="main-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/pricing" className="button button-solid get-started">
          Get Started
        </Link>
      </div>
    </header>
  );
}
