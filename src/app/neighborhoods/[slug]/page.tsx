import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  DollarSign,
  Square,
  Footprints,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";
import { neighborhoods } from "@/data/neighborhoods";
import { listings } from "@/data/listings";
import ListingCard from "@/components/listings/ListingCard";
import Button from "@/components/ui/Button";

interface NeighborhoodPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return neighborhoods.map((n) => ({
    slug: n.slug,
  }));
}

export async function generateMetadata({
  params,
}: NeighborhoodPageProps): Promise<Metadata> {
  const neighborhood = neighborhoods.find((n) => n.slug === params.slug);
  if (!neighborhood) return { title: "Neighborhood Not Found" };
  return {
    title: `${neighborhood.name} | Twin Cities Neighborhoods`,
    description: neighborhood.description.slice(0, 160),
  };
}

export default function NeighborhoodDetailPage({
  params,
}: NeighborhoodPageProps) {
  const neighborhood = neighborhoods.find((n) => n.slug === params.slug);

  if (!neighborhood) {
    notFound();
  }

  // Featured listings in this neighborhood
  const neighborhoodListings = listings.filter(
    (l) =>
      l.neighborhood.toLowerCase().replace(/\s+/g, "-") ===
        neighborhood.slug ||
      l.neighborhood === neighborhood.name
  );

  const stats = [
    {
      icon: DollarSign,
      label: "Avg. Price",
      value: neighborhood.stats.avgPrice,
    },
    {
      icon: Square,
      label: "Avg. Sq Ft",
      value: neighborhood.stats.avgSqft,
    },
    {
      icon: Footprints,
      label: "Walk Score",
      value: neighborhood.stats.walkScore.toString(),
    },
    {
      icon: GraduationCap,
      label: "Schools",
      value: neighborhood.stats.schools,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src={neighborhood.image}
          alt={neighborhood.name}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 md:pb-16">
            <Link
              href="/neighborhoods"
              className="inline-flex items-center gap-2 font-sans text-sm text-white/70 hover:text-white transition-colors duration-300 mb-6"
            >
              &larr; All Neighborhoods
            </Link>
            <p className="font-sans text-sm uppercase tracking-widest text-terracotta-light mb-3">
              Twin Cities Neighborhood
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-white">
              {neighborhood.name}
            </h1>
            <p className="font-sans text-lg text-white/80 mt-3 max-w-2xl">
              {neighborhood.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="py-8 px-4 md:px-8 text-center"
              >
                <stat.icon
                  size={22}
                  className="text-terracotta mx-auto mb-3"
                />
                <p className="font-serif text-xl md:text-2xl text-charcoal">
                  {stat.value}
                </p>
                <p className="font-sans text-xs uppercase tracking-wider text-charcoal-light mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Description Text */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
                About {neighborhood.name}
              </h2>
              <p className="font-sans text-charcoal-light leading-relaxed mb-8">
                {neighborhood.description}
              </p>
              <h3 className="font-serif text-2xl text-charcoal mb-4">
                The Lifestyle
              </h3>
              <p className="font-sans text-charcoal-light leading-relaxed">
                {neighborhood.lifestyle}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="font-serif text-2xl text-charcoal mb-6">
                Neighborhood Highlights
              </h3>
              <div className="space-y-4">
                {neighborhood.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-4 bg-white p-4"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-sage-dark flex-shrink-0 mt-0.5"
                    />
                    <span className="font-sans text-charcoal-light">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings in This Neighborhood */}
      {neighborhoodListings.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-2">
              Available in {neighborhood.name}
            </h2>
            <p className="font-sans text-charcoal-light text-center mb-10">
              {neighborhoodListings.length}{" "}
              {neighborhoodListings.length === 1 ? "property" : "properties"}{" "}
              currently listed
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {neighborhoodListings.slice(0, 6).map((listing) => (
                <ListingCard key={listing.slug} listing={listing} />
              ))}
            </div>
            {neighborhoodListings.length > 6 && (
              <div className="text-center mt-10">
                <Button href="/listings" variant="outline">
                  View All Listings
                </Button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-20 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-sm uppercase tracking-widest text-terracotta-light mb-4">
            Interested in {neighborhood.name}?
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            Let&apos;s Explore {neighborhood.name} Together
          </h2>
          <p className="font-sans text-white/70 mb-8 leading-relaxed">
            I&apos;d love to show you around and help you find the perfect home
            in {neighborhood.name}. Whether you&apos;re just starting your
            search or ready to make an offer, I&apos;m here to help.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Contact Maddy About {neighborhood.name}
          </Button>
        </div>
      </section>
    </>
  );
}
