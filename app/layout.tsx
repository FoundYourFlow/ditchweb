import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ditch.app"),
  title: {
    default: "Ditch | Inbox Clarity for Teams",
    template: "%s | Ditch"
  },
  description:
    "Ditch helps teams triage inbound communication, focus on high-impact work, and keep responses consistent.",
  alternates: {
    canonical: "/"
  }
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <a className="skip-link" href="#main-content">
            Skip to main content
          </a>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.name,
              url: `https://${siteConfig.domain}`,
              email: siteConfig.supportEmail
            })
          }}
        />
      </body>
    </html>
  );
}
