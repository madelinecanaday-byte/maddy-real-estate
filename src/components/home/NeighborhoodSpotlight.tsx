import Link from "next/link";
import Image from "next/image";
import { neighborhoods } from "@/data/neighborhoods";
import SectionHeading from "@/components/ui/SectionHeading";

export default function NeighborhoodSpotlight() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Explore the Twin Cities" subtitle="NEIGHBORHOODS" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {neighborhoods.map((neighborhood) => (
            <Link
              key={neighborhood.slug}
              href={`/neighborhoods/${neighborhood.slug}`}
              className="group relative block aspect-[4/3] overflow-hidden"
            >
              {/* Background image */}
              <Image
                src={neighborhood.image}
                alt={neighborhood.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent transition-colors duration-500 group-hover:from-charcoal/60 group-hover:via-charcoal/20" />

              {/* Content at bottom */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-serif text-2xl text-white mb-1">
                  {neighborhood.name}
                </h3>
                <p className="font-sans text-sm text-white/70 mb-3">
                  {neighborhood.tagline}
                </p>

                {/* Explore text - appears on hover */}
                <span className="inline-block font-sans text-sm uppercase tracking-widest text-terracotta-light opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Explore &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
