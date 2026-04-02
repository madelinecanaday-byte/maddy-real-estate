"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setSubmitError(null);
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setIsSubmitting(false);
    if (!res.ok) {
      setSubmitError("Something went wrong. Please try again.");
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <section className="bg-charcoal py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-14 h-14 rounded-full bg-terracotta/20 flex items-center justify-center mx-auto mb-6">
          <Mail size={24} className="text-terracotta-light" />
        </div>
        <h2 className="font-serif text-3xl md:text-4xl text-white">
          Stay in the Know
        </h2>
        <p className="font-sans text-white/60 mt-4 max-w-lg mx-auto leading-relaxed">
          Get monthly market updates, new listings, and Twin Cities real estate
          tips delivered straight to your inbox. No spam — just the good stuff.
        </p>

        {isSubmitted ? (
          <div className="mt-8">
            <div className="inline-flex items-center gap-2 bg-sage/20 px-6 py-3">
              <svg
                className="w-5 h-5 text-sage"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="font-sans text-sm text-white">
                You&apos;re on the list! Check your inbox for a welcome email.
              </span>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full sm:flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 font-sans text-sm outline-none focus:border-terracotta transition-colors duration-300"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-6 py-3 bg-terracotta text-white font-sans text-sm font-medium uppercase tracking-wide hover:bg-terracotta-dark transition-colors duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        )}

        {submitError && (
          <p className="font-sans text-xs text-terracotta-light mt-3">{submitError}</p>
        )}
        <p className="font-sans text-xs text-white/30 mt-4">
          Unsubscribe anytime. Your email is never shared.
        </p>
      </div>
    </section>
  );
}
