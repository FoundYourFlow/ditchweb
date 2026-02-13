import type { Metadata } from "next";

import { FaqList } from "@/components/faq-list";
import { fullFaqItems } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ"
};

export default function FaqPage() {
  return (
    <section className="section page-section">
      <div className="container narrow">
        <h1 className="page-title">Frequently Asked Questions</h1>
        <FaqList items={fullFaqItems} />
      </div>
    </section>
  );
}
