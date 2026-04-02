"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  meetingType: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
];

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>();

  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (data: BookingFormData) => {
    setSubmitError(null);
    const res = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      setSubmitError("Something went wrong. Please try again or call me directly.");
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
          Booking Request Sent!
        </h3>
        <p className="font-sans text-charcoal-light">
          I&apos;ll confirm your appointment via email within a few hours.
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
        <label htmlFor="book-name" className={labelStyles}>
          Name
        </label>
        <input
          id="book-name"
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
        <label htmlFor="book-email" className={labelStyles}>
          Email
        </label>
        <input
          id="book-email"
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
        <label htmlFor="book-phone" className={labelStyles}>
          Phone
        </label>
        <input
          id="book-phone"
          type="tel"
          placeholder="(651) 325-8483"
          className={inputStyles}
          {...register("phone", { required: "Phone number is required" })}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-terracotta font-sans">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Meeting Type */}
      <div>
        <label htmlFor="book-type" className={labelStyles}>
          Meeting Type
        </label>
        <select
          id="book-type"
          className={`${inputStyles} appearance-none cursor-pointer`}
          {...register("meetingType", { required: "Please select a meeting type" })}
        >
          <option value="">Select a meeting type</option>
          <option value="Buyer Consultation">Buyer Consultation (30 min)</option>
          <option value="Seller Consultation">Seller Consultation (45 min)</option>
          <option value="Virtual Meeting">Virtual Meeting (20 min)</option>
          <option value="Property Showing">Property Showing</option>
          <option value="Other">Other</option>
        </select>
        {errors.meetingType && (
          <p className="mt-1 text-sm text-terracotta font-sans">
            {errors.meetingType.message}
          </p>
        )}
      </div>

      {/* Date + Time */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label htmlFor="book-date" className={labelStyles}>
            Preferred Date
          </label>
          <input
            id="book-date"
            type="date"
            className={inputStyles}
            {...register("preferredDate", { required: "Please select a date" })}
          />
          {errors.preferredDate && (
            <p className="mt-1 text-sm text-terracotta font-sans">
              {errors.preferredDate.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="book-time" className={labelStyles}>
            Preferred Time
          </label>
          <select
            id="book-time"
            className={`${inputStyles} appearance-none cursor-pointer`}
            {...register("preferredTime", { required: "Please select a time" })}
          >
            <option value="">Select time</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          {errors.preferredTime && (
            <p className="mt-1 text-sm text-terracotta font-sans">
              {errors.preferredTime.message}
            </p>
          )}
        </div>
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="book-notes" className={labelStyles}>
          Anything I Should Know?{" "}
          <span className="normal-case tracking-normal">(optional)</span>
        </label>
        <textarea
          id="book-notes"
          rows={3}
          placeholder="Specific properties you want to see, neighborhoods you're interested in, etc."
          className={`${inputStyles} resize-none`}
          {...register("notes")}
        />
      </div>

      {submitError && (
        <p className="text-sm text-terracotta font-sans">{submitError}</p>
      )}
      <div className="pt-4">
        <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Request Booking"}
        </Button>
      </div>
    </form>
  );
}
