"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback("");

    try {
      const formData = new FormData(event.currentTarget);
      const email = formData.get("email");
      const issue = formData.get("issue");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, issue })
      });

      const payload = (await response.json()) as { message: string };
      setFeedback(payload.message);

      if (response.ok) {
        event.currentTarget.reset();
      }
    } catch {
      setFeedback("Something went wrong. Please email support@ditch.app.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="contact-email">Email</label>
      <input id="contact-email" name="email" type="email" required placeholder="you@company.com" />

      <label htmlFor="contact-issue">Issue</label>
      <textarea
        id="contact-issue"
        name="issue"
        rows={7}
        required
        placeholder="Tell us what you need help with."
      />

      <button className="button button-solid" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send message"}
      </button>

      {feedback ? <p className="form-feedback">{feedback}</p> : null}
    </form>
  );
}
