import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/">
          Ditch
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/#how">How It Works</Link>
          <Link href="/#features">Features</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
          <Link className="btn btn-primary" href="/pricing">
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
