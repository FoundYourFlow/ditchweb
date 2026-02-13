import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <section className="section page-section">
      <div className="container narrow contact-layout">
        <div>
          <h1 className="page-title">Contact & Support</h1>
          <p>
            Tell us what you are running into and our team will respond as quickly as possible.
          </p>
          <p>
            You can also email us directly at <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
