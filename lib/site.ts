export type FaqItem = {
  question: string;
  answer: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const siteConfig = {
  name: "Ditch",
  domain: "ditch.app",
  supportEmail: "support@ditch.app"
};

export const fullFaqItems: FaqItem[] = [
  {
    question: "What can Ditch do?",
    answer:
      "Ditch automatically triages inbound messages, prioritizes what needs attention, drafts useful replies, and keeps your team focused on work that matters."
  },
  {
    question: "Are my messages private and secure?",
    answer:
      "Yes. Ditch is built with privacy-first practices, encrypted communication, and controlled data handling with user memory controls."
  },
  {
    question: "Are my payments secure?",
    answer:
      "Yes. Payments are processed by Stripe using secure, PCI-compliant checkout flows and tokenized card handling."
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel anytime. Your plan remains active through the current billing period with no lock-in contracts."
  },
  {
    question: "How is my data privacy protected?",
    answer:
      "Ditch minimizes stored data, scopes access controls by default, and applies retention controls so teams can manage what is saved and for how long."
  }
];

export const homeFaqItems: FaqItem[] = fullFaqItems.slice(0, 3);

export const testimonials: Testimonial[] = [
  {
    name: "Maya L.",
    role: "Operations Lead",
    quote:
      "Ditch removed hours of inbox cleanup every week. The team sees priority requests instantly instead of digging through noise."
  },
  {
    name: "Devon P.",
    role: "Founder",
    quote:
      "We started using Ditch on Monday and by Friday response times were down by 41%. It feels focused and effortless."
  },
  {
    name: "Iris C.",
    role: "Customer Success",
    quote:
      "I trust the sorting logic because it is transparent. High-value conversations never get buried anymore."
  },
  {
    name: "Noah R.",
    role: "Product Manager",
    quote:
      "The interface is clean, fast, and practical. Ditch gives us signal without adding another complicated workflow."
  }
];

export const footerLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact & Support", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" }
];
