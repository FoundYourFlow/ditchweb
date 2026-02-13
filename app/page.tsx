import Link from "next/link";

import { FaqList } from "@/components/faq-list";
import { HeroDemo } from "@/components/hero-demo";
import { OnboardingFlow } from "@/components/onboarding-flow";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { homeFaqItems } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <ScrollReveal className="section hero-section">
        <div className="container hero-layout">
          <div>
            <p className="eyebrow">Inbox clarity, without the chaos</p>
            <h1>Sort, prioritize, and respond faster with Ditch.</h1>
            <p className="lead-copy">
              Ditch uses focused AI workflows to route important conversations, draft useful replies, and reduce the
              noise your team handles every day.
            </p>
            <div className="hero-actions">
              <Link href="/pricing" className="button button-solid">
                Get Started
              </Link>
              <Link href="/contact" className="button button-ghost">
                Contact Support
              </Link>
            </div>
          </div>
          <HeroDemo />
        </div>
      </ScrollReveal>

      <ScrollReveal className="section">
        <div className="container two-column">
          <div>
            <h2>The Problem</h2>
            <p>
              Teams lose momentum when critical requests are buried under repetitive, low-priority messages. Manual
              sorting costs time and introduces inconsistency.
            </p>
          </div>
          <div>
            <h2>The Outcome</h2>
            <p>
              Ditch surfaces what matters first, keeps routing logic clear, and gives your team confidence in every
              response cycle.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="section" id="features">
        <div className="container">
          <h2>Core Features</h2>
          <div className="feature-grid">
            <article className="feature-card">
              <h3>Priority Detection</h3>
              <p>Flag urgent conversations and route them instantly based on configurable team rules.</p>
            </article>
            <article className="feature-card">
              <h3>Smart Drafting</h3>
              <p>Generate response drafts from your tone and policy patterns, then review before sending.</p>
            </article>
            <article className="feature-card">
              <h3>Clean Audit Trail</h3>
              <p>Track why messages were categorized and maintain visibility into each action decision.</p>
            </article>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="section" id="how-it-works">
        <div className="container how-it-works-grid">
          <div>
            <h2>How It Works</h2>
            <ol className="steps-list">
              <li>Connect your inbound channels and set priorities.</li>
              <li>Let Ditch sort conversations and suggest response drafts.</li>
              <li>Approve, send, and monitor outcomes with transparent controls.</li>
            </ol>
          </div>
          <OnboardingFlow />
        </div>
      </ScrollReveal>

      <ScrollReveal className="section">
        <div className="container">
          <h2>Customer Testimonials</h2>
          <TestimonialsCarousel />
        </div>
      </ScrollReveal>

      <ScrollReveal className="section">
        <div className="container">
          <div className="section-header-row">
            <h2>FAQ</h2>
            <Link href="/faq" className="text-link">
              View full FAQ
            </Link>
          </div>
          <FaqList items={homeFaqItems} />
        </div>
      </ScrollReveal>

      <ScrollReveal className="section final-cta-section">
        <div className="container">
          <div className="final-cta-card">
            <h2>Ready to remove inbox noise?</h2>
            <p>Launch Ditch in minutes and keep your team focused on the conversations that matter.</p>
            <Link href="/pricing" className="button button-solid">
              Start with Ditch
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
