"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import type { ContactFormData } from "@/types";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    },
  });

  const onSubmit = async () => {
    // Simulate a brief network delay
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-sage/30 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-sage-dark"
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
        </div>
        <h3 className="font-serif text-2xl text-charcoal mb-3">
          Thank you!
        </h3>
        <p className="font-sans text-charcoal-light">
          Maddy will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block font-sans text-sm uppercase tracking-wider text-charcoal-light mb-1"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your full name"
          className="w-full border-b-2 border-gray-200 focus:border-terracotta bg-transparent py-3 font-sans text-charcoal placeholder:text-gray-400 outline-none transition-colors duration-300"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-terracotta font-sans">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block font-sans text-sm uppercase tracking-wider text-charcoal-light mb-1"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="your@email.com"
          className="w-full border-b-2 border-gray-200 focus:border-terracotta bg-transparent py-3 font-sans text-charcoal placeholder:text-gray-400 outline-none transition-colors duration-300"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address",
            },
          })}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-terracotta font-sans">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block font-sans text-sm uppercase tracking-wider text-charcoal-light mb-1"
        >
          Phone <span className="normal-case tracking-normal">(optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="(952) 555-0123"
          className="w-full border-b-2 border-gray-200 focus:border-terracotta bg-transparent py-3 font-sans text-charcoal placeholder:text-gray-400 outline-none transition-colors duration-300"
          {...register("phone")}
        />
      </div>

      {/* Interest */}
      <div>
        <label
          htmlFor="interest"
          className="block font-sans text-sm uppercase tracking-wider text-charcoal-light mb-1"
        >
          I&apos;m interested in
        </label>
        <select
          id="interest"
          className="w-full border-b-2 border-gray-200 focus:border-terracotta bg-transparent py-3 font-sans text-charcoal outline-none transition-colors duration-300 appearance-none cursor-pointer"
          {...register("interest")}
        >
          <option value="">Select an option</option>
          <option value="Buying">Buying</option>
          <option value="Selling">Selling</option>
          <option value="Both">Both</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block font-sans text-sm uppercase tracking-wider text-charcoal-light mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell me about your real estate goals..."
          className="w-full border-b-2 border-gray-200 focus:border-terracotta bg-transparent py-3 font-sans text-charcoal placeholder:text-gray-400 outline-none transition-colors duration-300 resize-none"
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-terracotta font-sans">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="pt-4">
        <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
