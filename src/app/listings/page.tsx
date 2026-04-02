import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listings | Maddy Canaday",
  description: "Browse Twin Cities real estate listings with Maddy Canaday, Keller Williams Realty Integrity.",
};

export default function ListingsPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-cream py-20 px-4">
      <div className="max-w-xl text-center">
        <p className="font-sans text-sm uppercase tracking-wider text-terracotta mb-4">
          Coming Soon
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
          Finding Your Perfect Home
        </h1>
        <p className="font-sans text-charcoal-light leading-relaxed mb-10">
          I&apos;m working on bringing full MLS listings directly to this site.
          In the meantime, I&apos;d love to help you search — reach out and I&apos;ll
          send you properties that match exactly what you&apos;re looking for.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-terracotta text-white font-sans text-sm uppercase tracking-wider hover:bg-terracotta-dark transition-colors duration-300"
          >
            Get in Touch
          </Link>
          <Link
            href="/book"
            className="inline-block px-8 py-4 border border-charcoal text-charcoal font-sans text-sm uppercase tracking-wider hover:border-terracotta hover:text-terracotta transition-colors duration-300"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
