import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { neighborhoods } from "@/data/neighborhoods";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Neighborhoods",
};

export default function NeighborhoodsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-sm uppercase tracking-widest text-terracotta-light mb-4">
            Discover the Twin Cities
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-white">
            Explore Twin Cities Neighborhoods
          </h1>
          <div className="w-16 h-0.5 bg-terracotta mx-auto mt-6" />
          <p className="font-sans text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            Every Twin Cities neighborhood has its own personality, charm, and
            lifestyle. Explore the areas I know and love, and find the one that
            feels like home.
          </p>
        </div>
      </section>

      {/* Neighborhood Grid */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.map((neighborhood) => (
              <Link
                key={neighborhood.slug}
                href={`/neighborhoods/${neighborhood.slug}`}
                className="group relative aspect-[4/3] overflow-hidden block"
              >
                {/* Background Image */}
                <Image
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent group-hover:from-charcoal/90 transition-colors duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
                    {neighborhood.name}
                  </h3>
                  <p className="font-sans text-sm text-white/80 mb-4 line-clamp-2">
                    {neighborhood.tagline}
                  </p>
                  <div className="flex items-center gap-2 font-sans text-sm text-terracotta-light group-hover:text-terracotta group-hover:gap-3 transition-all duration-300">
                    <span className="uppercase tracking-wider">Explore</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Not Sure Which Neighborhood Is Right for You?"
            subtitle="Let Me Help"
          />
          <p className="font-sans text-charcoal-light mt-6 mb-8 leading-relaxed">
            As a Twin Cities local, I know every street, every hidden gem, and
            every neighborhood&apos;s unique character. Let&apos;s chat about
            your lifestyle, priorities, and budget, and I&apos;ll help you find
            the perfect fit.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-none font-sans font-medium tracking-wide uppercase text-sm px-8 py-4 bg-terracotta text-white hover:bg-terracotta-dark transition-all duration-300"
          >
            Schedule a Neighborhood Tour
          </Link>
        </div>
      </section>
    </>
  );
}
