"use client";

import { useEffect, useRef, useState } from "react";

import { testimonials } from "@/lib/site";

const AUTO_ADVANCE_MS = 4200;
const MANUAL_PAUSE_MS = 8000;

function StarRow() {
  return (
    <div className="stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} viewBox="0 0 24 24" role="presentation" aria-hidden="true">
          <path d="M12 3.7l2.6 5.3 5.8.9-4.2 4.1 1 5.8L12 17l-5.2 2.8 1-5.8L3.6 9.9l5.8-.9L12 3.7z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const manualPauseUntil = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() < manualPauseUntil.current) {
        return;
      }

      setIndex((current) => (current + 1) % testimonials.length);
    }, AUTO_ADVANCE_MS);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const goToSlide = (nextIndex: number) => {
    manualPauseUntil.current = Date.now() + MANUAL_PAUSE_MS;
    const normalizedIndex = (nextIndex + testimonials.length) % testimonials.length;
    setIndex(normalizedIndex);
  };

  return (
    <div className="testimonial-shell">
      <article className="testimonial-card" aria-live="polite">
        <StarRow />
        <blockquote>“{testimonials[index].quote}”</blockquote>
        <p className="testimonial-author">{testimonials[index].name}</p>
        <p className="testimonial-role">{testimonials[index].role}</p>
      </article>

      <div className="testimonial-controls" aria-label="Testimonial controls">
        <button
          className="button button-ghost"
          type="button"
          aria-label="Previous testimonial"
          onClick={() => goToSlide(index - 1)}
        >
          <span aria-hidden="true">←</span>
        </button>

        <button
          className="button button-ghost"
          type="button"
          aria-label="Next testimonial"
          onClick={() => goToSlide(index + 1)}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
