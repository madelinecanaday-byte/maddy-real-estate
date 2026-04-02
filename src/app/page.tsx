import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import FeaturedListings from "@/components/home/FeaturedListings";
import WhyMaddy from "@/components/home/WhyMaddy";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import NeighborhoodSpotlight from "@/components/home/NeighborhoodSpotlight";
import CTASection from "@/components/home/CTASection";
import BlogPreview from "@/components/home/BlogPreview";
import NewsletterSignup from "@/components/home/NewsletterSignup";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FeaturedListings />
      <WhyMaddy />
      <TestimonialCarousel />
      <NeighborhoodSpotlight />
      <BlogPreview />
      <NewsletterSignup />
      <CTASection />
    </>
  );
}
