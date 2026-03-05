"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const valueProps = [
  {
    icon: Award,
    title: "Local Expertise",
    description:
      "Deep knowledge of Twin Cities neighborhoods, market trends, and hidden gems that only a local expert can provide. From Edina to North Loop, I know every corner of the Twin Cities.",
  },
  {
    icon: Users,
    title: "Client-First Approach",
    description:
      "Your goals are my priority. I listen carefully, communicate proactively, and tailor every step of the process to your unique needs and timeline.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description:
      "A track record of successful transactions, strong negotiations, and satisfied clients. Over 150 homes sold and counting, with a 98% client satisfaction rate.",
  },
];

export default function WhyMaddy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with accent block */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Terracotta accent block offset behind */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-terracotta/15" />
            <div className="relative aspect-[4/5] overflow-hidden bg-sage/30">
              {/* Placeholder for Maddy's professional headshot */}
              <div className="w-full h-full flex items-center justify-center text-charcoal-light font-sans text-sm">
                Professional Headshot
              </div>
            </div>
            {/* Small sage accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-sage" />
          </motion.div>

          {/* Right: Content */}
          <div>
            <SectionHeading
              title="Why Work With Maddy"
              subtitle="YOUR TRUSTED PARTNER"
              centered={false}
            />

            <div className="mt-12 space-y-10">
              {valueProps.map((prop, index) => {
                const Icon = prop.icon;
                return (
                  <motion.div
                    key={prop.title}
                    className="flex gap-5"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + index * 0.2,
                      ease: "easeOut",
                    }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-terracotta/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-terracotta" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-charcoal mb-2">
                        {prop.title}
                      </h3>
                      <p className="font-sans text-charcoal-light leading-relaxed">
                        {prop.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
