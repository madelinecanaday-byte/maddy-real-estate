import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-terracotta py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
          Ready to Find Your Dream Home?
        </h2>
        <p className="font-sans text-lg text-white/80 mt-4 max-w-xl mx-auto">
          Let&apos;s start your journey together.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-terracotta font-sans font-medium text-sm uppercase tracking-wide transition-all duration-300 hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-terracotta"
          >
            Get in Touch
          </Link>
          <Link
            href="/listings"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-sans font-medium text-sm uppercase tracking-wide transition-all duration-300 hover:bg-white hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-terracotta"
          >
            View Listings
          </Link>
        </div>
      </div>
    </section>
  );
}
