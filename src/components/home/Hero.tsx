"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative py-20 md:py-0 md:min-h-[90vh] flex flex-col md:flex-row overflow-hidden">
      {/* Mobile: Image first */}
      <div className="block md:hidden relative w-full h-[50vh]">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80')",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-charcoal/20" />
      </div>

      {/* Left side: Text content (55%) */}
      <div className="relative z-10 w-full md:w-[55%] flex items-center px-6 md:px-16 lg:px-24 py-12 md:py-0 bg-white">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="uppercase tracking-widest text-sm font-sans text-terracotta mb-4">
            Twin Cities Real Estate
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-charcoal leading-[1.1] mb-6">
            Find Your Perfect Home in the Twin Cities
          </h1>
          <p className="font-sans text-lg text-charcoal-light leading-relaxed mb-10 max-w-md">
            Award-winning real estate agent dedicated to making your dream home a
            reality.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/listings" variant="primary" size="lg">
              Explore Listings
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Maddy
            </Button>
          </div>
        </motion.div>

        {/* Diagonal divider element */}
        <div className="hidden md:block absolute top-0 right-0 w-24 h-full z-20 overflow-hidden">
          <div
            className="absolute top-0 -right-12 w-48 h-full bg-white"
            style={{
              clipPath: "polygon(0 0, 100% 0, 60% 100%, 0 100%)",
            }}
          />
        </div>
      </div>

      {/* Right side: Image (45%) - Desktop */}
      <div className="hidden md:block relative w-[45%]">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80')",
          }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-charcoal/10" />

        {/* Accent offset block */}
        <motion.div
          className="absolute -bottom-6 -left-6 w-32 h-32 bg-terracotta/20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />
        <motion.div
          className="absolute -top-6 -right-6 w-24 h-24 border-2 border-sage"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        />
      </div>
    </section>
  );
}
