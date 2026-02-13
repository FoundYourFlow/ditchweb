"use client";

import { useEffect, useState } from "react";

const steps = [
  "Connect your inbox",
  "Define sorting rules",
  "Review and approve drafts"
];

export function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((step) => (step + 1) % steps.length);
    }, 2300);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="onboarding-flow" aria-label="Animated onboarding sequence">
      <ol>
        {steps.map((step, index) => {
          const status =
            index < currentStep ? "complete" : index === currentStep ? "active" : "upcoming";

          return (
            <li key={step} className={`flow-step ${status}`}>
              <span className="flow-index" aria-hidden="true">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
