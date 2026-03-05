"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { target: 150, suffix: "+", label: "Homes Sold" },
  { target: 12, suffix: "+", label: "Years Experience" },
  { target: 98, suffix: "%", label: "Client Satisfaction" },
  { target: 50, suffix: "M+", label: "In Sales Volume" },
];

export default function StatsBar() {
  return (
    <section className="bg-charcoal py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              light
            />
          ))}
        </div>
      </div>
    </section>
  );
}
