"use client";

import { useEffect, useState } from "react";

const messages = [
  { sender: "Taylor", subject: "Invoice approval", destination: "Priority" },
  { sender: "SaaS Billing", subject: "Plan renewal reminder", destination: "Review" },
  { sender: "Acme Support", subject: "Escalated customer issue", destination: "Priority" },
  { sender: "Newsletter", subject: "Weekly growth hacks", destination: "Archive" }
];

export function HeroDemo() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((value) => (value + 1) % messages.length);
    }, 1700);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="hero-demo" aria-label="Animated demo of Ditch sorting messages">
      <div className="hero-demo-header">
        <span className="status-dot" aria-hidden="true" />
        <span>AI triage in progress</span>
      </div>

      <ul className="message-list" aria-live="polite">
        {messages.map((message, index) => {
          const state = index < activeStep ? "sorted" : index === activeStep ? "sorting" : "queued";

          return (
            <li key={message.subject} className={`message-card ${state}`}>
              <div>
                <p className="message-sender">{message.sender}</p>
                <p className="message-subject">{message.subject}</p>
              </div>
              <span className="message-destination">{state === "queued" ? "Queued" : message.destination}</span>
            </li>
          );
        })}
      </ul>

      <div className="skeleton-panel" aria-hidden="true">
        <span className="skeleton-line short" />
        <span className="skeleton-line long" />
        <span className="skeleton-line medium" />
      </div>
    </div>
  );
}
