import type { Metadata } from "next";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Testimonials",
};

const typeBadgeStyles: Record<string, string> = {
  Buyer: "bg-sage/30 text-sage-dark",
  Seller: "bg-terracotta/10 text-terracotta-dark",
  Both: "bg-charcoal/10 text-charcoal",
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-sm uppercase tracking-widest text-terracotta-light mb-4">
            Real Stories, Real Results
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-white">
            What Our Clients Say
          </h1>
          <div className="w-16 h-0.5 bg-terracotta mx-auto mt-6" />
          <p className="font-sans text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            Nothing means more to me than the trust my clients place in me.
            Here&apos;s what some of them have to say about their experience
            working together.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Quote Icon */}
                <Quote
                  size={32}
                  className="text-terracotta/20 mb-4 flex-shrink-0"
                />

                {/* Quote Text */}
                <p className="font-sans text-charcoal-light leading-relaxed flex-1 mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={cn(
                        i < testimonial.rating
                          ? "fill-terracotta text-terracotta"
                          : "fill-gray-200 text-gray-200"
                      )}
                    />
                  ))}
                </div>

                {/* Client Info */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="font-serif text-base text-charcoal">
                      {testimonial.name}
                    </p>
                    <p className="font-sans text-xs text-charcoal-light mt-0.5">
                      {testimonial.location}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "px-3 py-1 text-xs font-sans font-medium uppercase tracking-wider rounded-none",
                      typeBadgeStyles[testimonial.type]
                    )}
                  >
                    {testimonial.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-sm uppercase tracking-widest text-terracotta-light mb-4">
            Ready to Start Your Journey?
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            Let&apos;s Write Your Success Story
          </h2>
          <p className="font-sans text-white/70 mb-8 leading-relaxed">
            Whether you&apos;re buying your first home, selling a cherished
            property, or looking for your next investment, I&apos;m here to make
            your real estate experience exceptional.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Work With Maddy
          </Button>
        </div>
      </section>
    </>
  );
}
