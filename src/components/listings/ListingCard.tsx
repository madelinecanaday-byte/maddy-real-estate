import Link from "next/link";
import Image from "next/image";
import { Bed, Bath, Square } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import type { Listing } from "@/types";

interface ListingCardProps {
  listing: Listing;
}

const statusStyles: Record<Listing["status"], string> = {
  Active: "bg-green-600 text-white",
  Pending: "bg-yellow-500 text-charcoal",
  Sold: "bg-gray-500 text-white",
};

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <Link
      href={`/listings/${listing.slug}`}
      className="group block bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-none overflow-hidden"
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={listing.images[0]}
          alt={listing.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Price Overlay */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2">
          <span className="font-serif text-xl text-charcoal">
            {formatPrice(listing.price)}
          </span>
        </div>

        {/* Status Badge */}
        <div
          className={cn(
            "absolute top-4 right-4 px-3 py-1 text-xs font-sans font-medium uppercase tracking-wider",
            statusStyles[listing.status]
          )}
        >
          {listing.status}
        </div>
      </div>

      {/* Details Section */}
      <div className="p-5">
        <h3 className="font-serif text-lg text-charcoal group-hover:text-terracotta transition-colors duration-300 line-clamp-1">
          {listing.address}
        </h3>
        <p className="font-sans text-sm text-charcoal-light mt-1">
          {listing.city}, {listing.state} {listing.zip}
        </p>

        {/* Beds / Baths / Sqft */}
        <div className="flex items-center gap-5 mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1.5 text-charcoal-light">
            <Bed size={16} className="text-terracotta" />
            <span className="font-sans text-sm">
              {listing.beds} {listing.beds === 1 ? "Bed" : "Beds"}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-charcoal-light">
            <Bath size={16} className="text-terracotta" />
            <span className="font-sans text-sm">
              {listing.baths} {listing.baths === 1 ? "Bath" : "Baths"}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-charcoal-light">
            <Square size={16} className="text-terracotta" />
            <span className="font-sans text-sm">
              {listing.sqft.toLocaleString()} sqft
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
