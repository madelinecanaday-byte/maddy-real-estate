import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Bed,
  Bath,
  Square,
  Calendar,
  Car,
  Ruler,
  Hash,
  Clock,
  CheckCircle2,
  Phone,
  Mail,
  ChevronLeft,
} from "lucide-react";
import { listings } from "@/data/listings";
import { formatPrice, formatNumber } from "@/lib/utils";
import ImageGallery from "@/components/listings/ImageGallery";
import ContactForm from "@/components/ui/ContactForm";
import ListingCard from "@/components/listings/ListingCard";

interface ListingPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return listings.map((listing) => ({
    slug: listing.slug,
  }));
}

export async function generateMetadata({
  params,
}: ListingPageProps): Promise<Metadata> {
  const listing = listings.find((l) => l.slug === params.slug);
  if (!listing) return { title: "Listing Not Found" };
  return {
    title: `${listing.address} | ${formatPrice(listing.price)}`,
    description: listing.description.slice(0, 160),
  };
}

const statusStyles: Record<string, string> = {
  Active: "bg-green-600 text-white",
  Pending: "bg-yellow-500 text-charcoal",
  Sold: "bg-gray-500 text-white",
};

export default function ListingDetailPage({ params }: ListingPageProps) {
  const listing = listings.find((l) => l.slug === params.slug);

  if (!listing) {
    notFound();
  }

  // Similar listings: same neighborhood or similar price range
  const similarListings = listings
    .filter(
      (l) =>
        l.slug !== listing.slug &&
        (l.neighborhood === listing.neighborhood ||
          Math.abs(l.price - listing.price) < listing.price * 0.3)
    )
    .slice(0, 3);

  const details = [
    { icon: Bed, label: "Bedrooms", value: listing.beds },
    { icon: Bath, label: "Bathrooms", value: listing.baths },
    {
      icon: Square,
      label: "Square Feet",
      value: formatNumber(listing.sqft),
    },
    { icon: Calendar, label: "Year Built", value: listing.yearBuilt },
    { icon: Ruler, label: "Lot Size", value: listing.lotSize },
    {
      icon: Car,
      label: "Garage",
      value: listing.garage > 0 ? `${listing.garage}-car` : "None",
    },
    { icon: Hash, label: "MLS #", value: listing.mlsNumber },
    {
      icon: Clock,
      label: "Days on Market",
      value: listing.daysOnMarket,
    },
  ];

  return (
    <>
      {/* Back Navigation */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/listings"
            className="inline-flex items-center gap-2 font-sans text-sm text-charcoal-light hover:text-terracotta transition-colors duration-300"
          >
            <ChevronLeft size={16} />
            Back to Listings
          </Link>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ImageGallery images={listing.images} />
        </div>
      </section>

      {/* Listing Content */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-10">
              {/* Header */}
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className={`px-3 py-1 text-xs font-sans font-medium uppercase tracking-wider ${statusStyles[listing.status]}`}
                  >
                    {listing.status}
                  </span>
                  <span className="font-sans text-xs uppercase tracking-wider text-charcoal-light">
                    {listing.propertyType}
                  </span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-3">
                  {formatPrice(listing.price)}
                </h1>
                <p className="font-sans text-lg text-charcoal-light">
                  {listing.address}, {listing.city}, {listing.state}{" "}
                  {listing.zip}
                </p>
                <p className="font-sans text-sm text-terracotta mt-2">
                  {listing.neighborhood}
                </p>
              </div>

              {/* Description */}
              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">
                  About This Property
                </h2>
                <p className="font-sans text-charcoal-light leading-relaxed">
                  {listing.description}
                </p>
              </div>

              {/* Property Details Grid */}
              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-6">
                  Property Details
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {details.map((detail) => (
                    <div
                      key={detail.label}
                      className="bg-white p-4 text-center"
                    >
                      <detail.icon
                        size={20}
                        className="text-terracotta mx-auto mb-2"
                      />
                      <p className="font-sans text-xs uppercase tracking-wider text-charcoal-light mb-1">
                        {detail.label}
                      </p>
                      <p className="font-serif text-lg text-charcoal">
                        {detail.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-6">
                  Features &amp; Amenities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {listing.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 font-sans text-charcoal-light"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-sage-dark flex-shrink-0"
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Schedule a Showing */}
              <div className="bg-white p-6 md:p-8 shadow-sm sticky top-24">
                <h3 className="font-serif text-xl text-charcoal mb-6">
                  Schedule a Showing
                </h3>
                <ContactForm />
              </div>

              {/* Agent Info */}
              <div className="bg-white p-6 md:p-8 shadow-sm">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-sage/30 flex items-center justify-center mx-auto mb-4">
                    <span className="font-serif text-2xl text-sage-dark">
                      MC
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-charcoal">
                    Maddy Canaday
                  </h3>
                  <p className="font-sans text-sm text-charcoal-light mt-1">
                    Keller Williams Realty Integrity
                  </p>
                </div>
                <div className="mt-6 space-y-3">
                  <a
                    href="tel:+16513258483"
                    className="flex items-center gap-3 font-sans text-sm text-charcoal-light hover:text-terracotta transition-colors duration-300"
                  >
                    <Phone size={16} className="text-terracotta" />
                    (651) 325-8483
                  </a>
                  <a
                    href="mailto:madelinecanaday@kw.com"
                    className="flex items-center gap-3 font-sans text-sm text-charcoal-light hover:text-terracotta transition-colors duration-300"
                  >
                    <Mail size={16} className="text-terracotta" />
                    madelinecanaday@kw.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Listings */}
      {similarListings.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-charcoal mb-2 text-center">
              Similar Properties
            </h2>
            <p className="font-sans text-charcoal-light text-center mb-10">
              You might also be interested in these listings
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarListings.map((similar) => (
                <ListingCard key={similar.slug} listing={similar} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
