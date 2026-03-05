"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { listings } from "@/data/listings";
import ListingCard from "@/components/listings/ListingCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function FeaturedListings() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const featured = listings.filter((l) => l.status === "Active").slice(0, 6);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector("div")?.offsetWidth ?? 380;
    const gap = 24;
    const distance = cardWidth + gap;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-cream py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Featured Listings" subtitle="HANDPICKED FOR YOU" />

        {/* Carousel container */}
        <div className="relative mt-14">
          {/* Scroll buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg flex items-center justify-center hover:bg-terracotta hover:text-white transition-colors duration-300 text-charcoal"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg flex items-center justify-center hover:bg-terracotta hover:text-white transition-colors duration-300 text-charcoal"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {featured.map((listing) => (
              <div
                key={listing.slug}
                className="flex-shrink-0 w-[340px] md:w-[380px]"
              >
                <ListingCard listing={listing} />
              </div>
            ))}
          </div>
        </div>

        {/* View All button */}
        <div className="text-center mt-12">
          <Button href="/listings" variant="outline" size="lg">
            View All Listings
          </Button>
        </div>
      </div>
    </section>
  );
}
