"use client";

import { LayoutGrid, List } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ListingFilterValues {
  priceRange: string;
  beds: string;
  baths: string;
  propertyType: string;
  neighborhood: string;
  sort: string;
  view: "grid" | "list";
}

interface ListingFiltersProps {
  filters: ListingFilterValues;
  onFilterChange: (filters: ListingFilterValues) => void;
  neighborhoods: string[];
}

const priceRangeOptions = [
  { value: "", label: "Any Price" },
  { value: "0-500000", label: "Under $500K" },
  { value: "500000-750000", label: "$500K - $750K" },
  { value: "750000-1000000", label: "$750K - $1M" },
  { value: "1000000+", label: "$1M+" },
];

const bedsOptions = [
  { value: "", label: "Any Beds" },
  { value: "2", label: "2+" },
  { value: "3", label: "3+" },
  { value: "4", label: "4+" },
];

const bathsOptions = [
  { value: "", label: "Any Baths" },
  { value: "2", label: "2+" },
  { value: "3", label: "3+" },
];

const propertyTypeOptions = [
  { value: "", label: "Any Type" },
  { value: "Single Family", label: "Single Family" },
  { value: "Condo", label: "Condo" },
  { value: "Townhouse", label: "Townhouse" },
];

const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

function SelectField({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-white border border-gray-200 rounded-none px-3 py-2.5 font-sans text-sm text-charcoal outline-none focus:border-terracotta transition-colors duration-300 appearance-none cursor-pointer"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export default function ListingFilters({
  filters,
  onFilterChange,
  neighborhoods,
}: ListingFiltersProps) {
  const updateFilter = (key: keyof ListingFilterValues, value: string) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const neighborhoodOptions = [
    { value: "", label: "Any Neighborhood" },
    ...neighborhoods.map((n) => ({ value: n, label: n })),
  ];

  return (
    <div className="bg-white border border-gray-100 p-4 lg:p-6">
      {/* Filter Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        <SelectField
          value={filters.priceRange}
          onChange={(v) => updateFilter("priceRange", v)}
          options={priceRangeOptions}
        />
        <SelectField
          value={filters.beds}
          onChange={(v) => updateFilter("beds", v)}
          options={bedsOptions}
        />
        <SelectField
          value={filters.baths}
          onChange={(v) => updateFilter("baths", v)}
          options={bathsOptions}
        />
        <SelectField
          value={filters.propertyType}
          onChange={(v) => updateFilter("propertyType", v)}
          options={propertyTypeOptions}
        />
        <SelectField
          value={filters.neighborhood}
          onChange={(v) => updateFilter("neighborhood", v)}
          options={neighborhoodOptions}
        />
      </div>

      {/* Sort & View Toggle Row */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <span className="font-sans text-xs uppercase tracking-wider text-charcoal-light">
            Sort by
          </span>
          <select
            value={filters.sort}
            onChange={(e) => updateFilter("sort", e.target.value)}
            className="bg-transparent border-none font-sans text-sm text-charcoal font-medium outline-none cursor-pointer appearance-none pr-4"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => updateFilter("view", "grid")}
            className={cn(
              "p-2 transition-colors duration-300",
              filters.view === "grid"
                ? "text-terracotta"
                : "text-charcoal-light hover:text-charcoal"
            )}
            aria-label="Grid view"
          >
            <LayoutGrid size={18} />
          </button>
          <button
            onClick={() => updateFilter("view", "list")}
            className={cn(
              "p-2 transition-colors duration-300",
              filters.view === "list"
                ? "text-terracotta"
                : "text-charcoal-light hover:text-charcoal"
            )}
            aria-label="List view"
          >
            <List size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
