"use client";

import { useState, useMemo } from "react";
import { listings } from "@/data/listings";
import ListingCard from "@/components/listings/ListingCard";
import ListingFilters, {
  type ListingFilterValues,
} from "@/components/listings/ListingFilters";
import { Search } from "lucide-react";

const defaultFilters: ListingFilterValues = {
  priceRange: "",
  beds: "",
  baths: "",
  propertyType: "",
  neighborhood: "",
  sort: "newest",
  view: "grid",
};

export default function ListingsPage() {
  const [filters, setFilters] = useState<ListingFilterValues>(defaultFilters);

  const neighborhoods = useMemo(() => {
    const unique = Array.from(new Set(listings.map((l) => l.neighborhood)));
    return unique.sort();
  }, []);

  const filteredListings = useMemo(() => {
    let result = [...listings];

    // Filter by price range
    if (filters.priceRange) {
      if (filters.priceRange.includes("+")) {
        const min = parseInt(filters.priceRange.replace("+", ""));
        result = result.filter((l) => l.price >= min);
      } else {
        const [min, max] = filters.priceRange.split("-").map(Number);
        result = result.filter((l) => l.price >= min && l.price <= max);
      }
    }

    // Filter by beds
    if (filters.beds) {
      const minBeds = parseInt(filters.beds);
      result = result.filter((l) => l.beds >= minBeds);
    }

    // Filter by baths
    if (filters.baths) {
      const minBaths = parseInt(filters.baths);
      result = result.filter((l) => l.baths >= minBaths);
    }

    // Filter by property type
    if (filters.propertyType) {
      result = result.filter((l) => l.propertyType === filters.propertyType);
    }

    // Filter by neighborhood
    if (filters.neighborhood) {
      result = result.filter((l) => l.neighborhood === filters.neighborhood);
    }

    // Sort
    switch (filters.sort) {
      case "newest":
        result.sort((a, b) => a.daysOnMarket - b.daysOnMarket);
        break;
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
    }

    return result;
  }, [filters]);

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-sm uppercase tracking-widest text-terracotta-light mb-4">
            Browse Available Properties
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-white">
            Find Your Perfect Property
          </h1>
          <div className="w-16 h-0.5 bg-terracotta mx-auto mt-6" />
        </div>
      </section>

      {/* Filter Bar & Listings */}
      <section className="py-12 md:py-16 bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <ListingFilters
            filters={filters}
            onFilterChange={setFilters}
            neighborhoods={neighborhoods}
          />

          {/* Results Count */}
          <div className="mt-8 mb-6 flex items-center justify-between">
            <p className="font-sans text-sm text-charcoal-light">
              Showing{" "}
              <span className="font-medium text-charcoal">
                {filteredListings.length}
              </span>{" "}
              {filteredListings.length === 1 ? "property" : "properties"}
            </p>
            {(filters.priceRange ||
              filters.beds ||
              filters.baths ||
              filters.propertyType ||
              filters.neighborhood) && (
              <button
                onClick={() => setFilters(defaultFilters)}
                className="font-sans text-sm text-terracotta hover:text-terracotta-dark transition-colors duration-300 underline underline-offset-4"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Listings Grid */}
          {filteredListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredListings.map((listing) => (
                <ListingCard key={listing.slug} listing={listing} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-sage-dark" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-3">
                No properties match your criteria
              </h3>
              <p className="font-sans text-charcoal-light max-w-md mx-auto mb-8">
                Try adjusting your filters to see more results, or clear all
                filters to browse all available properties.
              </p>
              <button
                onClick={() => setFilters(defaultFilters)}
                className="inline-flex items-center justify-center rounded-none font-sans font-medium tracking-wide uppercase text-sm px-8 py-4 bg-terracotta text-white hover:bg-terracotta-dark transition-all duration-300"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
