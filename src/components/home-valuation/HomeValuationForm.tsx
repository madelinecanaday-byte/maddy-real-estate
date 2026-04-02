"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";

interface ValuationFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  bedrooms: string;
  bathrooms: string;
  squareFeet: string;
  yearBuilt: string;
  condition: string;
  improvements: string;
  timeline: string;
}

export default function HomeValuationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ValuationFormData>();

  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (data: ValuationFormData) => {
    setSubmitError(null);
    const res = await fetch("/api/valuation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      setSubmitError("Something went wrong. Please try again or contact me directly.");
      return;
    }
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
          Request Received!
        </h3>
        <p className="font-sans text-charcoal-light">
          I&apos;ll have your personalized market analysis ready within 24 hours. Check your email!
        </p>
      </div>
    );
  }

  const inputStyles =
    "w-full border-b-2 border-gray-200 focus:border-terracotta bg-transparent py-3 font-sans text-charcoal placeholder:text-gray-400 outline-none transition-colors duration-300";
  const labelStyles =
    "block font-sans text-sm uppercase tracking-wider text-charcoal-light mb-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {/* Name */}
      <div>
        <label htmlFor="val-name" className={labelStyles}>
          Name
        </label>
        <input
          id="val-name"
          type="text"
          placeholder="Your full name"
          className={inputStyles}
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
        <label htmlFor="val-email" className={labelStyles}>
          Email
        </label>
        <input
          id="val-email"
          type="email"
          placeholder="your@email.com"
          className={inputStyles}
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
        <label htmlFor="val-phone" className={labelStyles}>
          Phone <span className="normal-case tracking-normal">(optional)</span>
        </label>
        <input
          id="val-phone"
          type="tel"
          placeholder="(651) 325-8483"
          className={inputStyles}
          {...register("phone")}
        />
      </div>

      {/* Address */}
      <div>
        <label htmlFor="val-address" className={labelStyles}>
          Property Address
        </label>
        <input
          id="val-address"
          type="text"
          placeholder="123 Main St"
          className={inputStyles}
          {...register("address", { required: "Address is required" })}
        />
        {errors.address && (
          <p className="mt-1 text-sm text-terracotta font-sans">
            {errors.address.message}
          </p>
        )}
      </div>

      {/* City */}
      <div>
        <label htmlFor="val-city" className={labelStyles}>
          City
        </label>
        <select
          id="val-city"
          className={`${inputStyles} appearance-none cursor-pointer`}
          {...register("city", { required: "City is required" })}
        >
          <option value="">Select a city</option>
          <option value="Minneapolis">Minneapolis</option>
          <option value="St. Paul">St. Paul</option>
          <option value="Edina">Edina</option>
          <option value="Wayzata">Wayzata</option>
          <option value="Minnetonka">Minnetonka</option>
          <option value="Plymouth">Plymouth</option>
          <option value="St. Louis Park">St. Louis Park</option>
          <option value="Eden Prairie">Eden Prairie</option>
          <option value="Other">Other</option>
        </select>
        {errors.city && (
          <p className="mt-1 text-sm text-terracotta font-sans">
            {errors.city.message}
          </p>
        )}
      </div>

      {/* Bedrooms + Bathrooms */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label htmlFor="val-beds" className={labelStyles}>
            Bedrooms
          </label>
          <select
            id="val-beds"
            className={`${inputStyles} appearance-none cursor-pointer`}
            {...register("bedrooms")}
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5+">5+</option>
          </select>
        </div>
        <div>
          <label htmlFor="val-baths" className={labelStyles}>
            Bathrooms
          </label>
          <select
            id="val-baths"
            className={`${inputStyles} appearance-none cursor-pointer`}
            {...register("bathrooms")}
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            <option value="2.5">2.5</option>
            <option value="3">3</option>
            <option value="3.5+">3.5+</option>
          </select>
        </div>
      </div>

      {/* Sq Ft + Year Built */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label htmlFor="val-sqft" className={labelStyles}>
            Approx. Sq Ft
          </label>
          <input
            id="val-sqft"
            type="text"
            placeholder="e.g. 2,000"
            className={inputStyles}
            {...register("squareFeet")}
          />
        </div>
        <div>
          <label htmlFor="val-year" className={labelStyles}>
            Year Built
          </label>
          <input
            id="val-year"
            type="text"
            placeholder="e.g. 1995"
            className={inputStyles}
            {...register("yearBuilt")}
          />
        </div>
      </div>

      {/* Condition */}
      <div>
        <label htmlFor="val-condition" className={labelStyles}>
          Overall Condition
        </label>
        <select
          id="val-condition"
          className={`${inputStyles} appearance-none cursor-pointer`}
          {...register("condition")}
        >
          <option value="">Select condition</option>
          <option value="Excellent">Excellent — move-in ready, updated</option>
          <option value="Good">Good — well maintained, minor updates needed</option>
          <option value="Fair">Fair — functional but needs some work</option>
          <option value="Needs Work">Needs significant renovation</option>
        </select>
      </div>

      {/* Recent Improvements */}
      <div>
        <label htmlFor="val-improvements" className={labelStyles}>
          Recent Improvements{" "}
          <span className="normal-case tracking-normal">(optional)</span>
        </label>
        <textarea
          id="val-improvements"
          rows={3}
          placeholder="New roof, updated kitchen, finished basement, etc."
          className={`${inputStyles} resize-none`}
          {...register("improvements")}
        />
      </div>

      {/* Timeline */}
      <div>
        <label htmlFor="val-timeline" className={labelStyles}>
          Are you considering selling?
        </label>
        <select
          id="val-timeline"
          className={`${inputStyles} appearance-none cursor-pointer`}
          {...register("timeline")}
        >
          <option value="">Select timeline</option>
          <option value="ASAP">Yes, as soon as possible</option>
          <option value="3-6 months">Yes, within 3-6 months</option>
          <option value="6-12 months">Maybe in the next 6-12 months</option>
          <option value="Just curious">Just curious about my home&apos;s value</option>
        </select>
      </div>

      {submitError && (
        <p className="text-sm text-terracotta font-sans">{submitError}</p>
      )}
      <div className="pt-4">
        <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Get My Free Valuation"}
        </Button>
      </div>
    </form>
  );
}
