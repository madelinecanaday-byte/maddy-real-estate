import type { Metadata } from "next";
import HomeValuationForm from "@/components/home-valuation/HomeValuationForm";

export const metadata: Metadata = {
  title: "What's My Home Worth?",
  description:
    "Get a free, no-obligation home valuation for your Twin Cities property. Find out what your home is worth in today's market with Maddy Canaday.",
};

const steps = [
  {
    number: "01",
    title: "Share Your Details",
    description:
      "Fill out the form with your property information. The more details you provide, the more accurate your valuation will be.",
  },
  {
    number: "02",
    title: "I Analyze the Market",
    description:
      "I'll research recent sales, current listings, and market trends in your neighborhood to determine your home's value.",
  },
  {
    number: "03",
    title: "Receive Your Report",
    description:
      "Within 24 hours, you'll receive a detailed Comparative Market Analysis with your estimated home value and market insights.",
  },
];

const benefits = [
  "Detailed Comparative Market Analysis (CMA)",
  "Recent comparable sales in your neighborhood",
  "Current market trends and conditions",
  "Personalized recommendations to maximize value",
  "No obligation — just honest, data-driven insight",
];

export default function HomeValuationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-sm uppercase tracking-widest text-terracotta-light mb-4">
            Free Home Valuation
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-white">
            What&apos;s My Home Worth?
          </h1>
          <div className="w-16 h-0.5 bg-terracotta mx-auto mt-6" />
          <p className="font-sans text-white/70 mt-6 max-w-xl mx-auto leading-relaxed">
            Get a free, no-obligation market analysis of your Twin Cities home. I&apos;ll provide a detailed report within 24 hours.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="uppercase tracking-widest text-sm font-sans text-terracotta mb-3">
              How It Works
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              Three Simple Steps
            </h2>
            <div className="w-16 h-0.5 bg-terracotta mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <span className="font-serif text-5xl text-terracotta/20">
                  {step.number}
                </span>
                <h3 className="font-serif text-xl text-charcoal mt-2 mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-charcoal-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Form */}
            <div className="bg-cream p-8 md:p-12">
              <h2 className="font-serif text-2xl text-charcoal mb-2">
                Get Your Free Valuation
              </h2>
              <p className="font-sans text-sm text-charcoal-light mb-8">
                Tell me about your property and I&apos;ll prepare a detailed market analysis.
              </p>
              <HomeValuationForm />
            </div>

            {/* Right - Benefits */}
            <div className="flex flex-col justify-center">
              <p className="uppercase tracking-widest text-sm font-sans text-terracotta mb-3">
                What You&apos;ll Receive
              </p>
              <h2 className="font-serif text-3xl text-charcoal mb-8">
                A Comprehensive Market Analysis
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sage/30 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-sage-dark"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="font-sans text-charcoal-light leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 p-6 bg-cream">
                <p className="font-serif text-lg text-charcoal italic">
                  &ldquo;Maddy&apos;s market analysis was incredibly detailed and helped us price our home perfectly. We sold in 5 days above asking!&rdquo;
                </p>
                <p className="font-sans text-sm text-charcoal-light mt-3">
                  — Sarah & James, Edina
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
