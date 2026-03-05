"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-rotation every 5 seconds
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const testimonial = testimonials[current];

  return (
    <section className="bg-cream py-20">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading title="What Clients Say" subtitle="TESTIMONIALS" />

        <div className="mt-14 relative">
          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-md flex items-center justify-center hover:bg-terracotta hover:text-white transition-colors duration-300 text-charcoal"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-md flex items-center justify-center hover:bg-terracotta hover:text-white transition-colors duration-300 text-charcoal"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Card */}
          <div className="overflow-hidden px-8 md:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white p-8 md:p-12 shadow-sm"
              >
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-terracotta/30 mb-6" />

                {/* Testimonial text */}
                <p className="font-sans text-lg md:text-xl text-charcoal leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Star rating */}
                <div className="flex gap-1 mt-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>

                {/* Client info */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                  <div>
                    <p className="font-serif text-lg text-charcoal">
                      {testimonial.name}
                    </p>
                    <p className="font-sans text-sm text-charcoal-light mt-1">
                      {testimonial.location}
                    </p>
                  </div>
                  <span className="inline-block px-3 py-1 bg-terracotta/10 text-terracotta text-xs font-sans font-medium uppercase tracking-wider">
                    {testimonial.type}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-terracotta w-8"
                    : "bg-charcoal/20 hover:bg-charcoal/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
