export interface Listing {
  slug: string;
  title: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  yearBuilt: number;
  propertyType: "Single Family" | "Condo" | "Townhouse" | "Multi-Family";
  neighborhood: string;
  description: string;
  features: string[];
  images: string[];
  status: "Active" | "Pending" | "Sold";
  mlsNumber: string;
  daysOnMarket: number;
  lotSize: string;
  garage: number;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  type: "Buyer" | "Seller" | "Both";
}

export interface Neighborhood {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  stats: {
    avgPrice: string;
    avgSqft: string;
    walkScore: number;
    schools: string;
  };
  highlights: string[];
  lifestyle: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  interest: "Buying" | "Selling" | "Both" | "";
}
