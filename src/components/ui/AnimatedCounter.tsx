"use client";

import { useEffect, useRef, useState } from "react";
import {
  useInView,
  useMotionValue,
  useTransform,
  animate,
  motion,
} from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  label: string;
  light?: boolean;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  label,
  light = false,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, target, {
        duration: 2,
        ease: "easeOut",
      });

      const unsubscribe = rounded.on("change", (latest) => {
        setDisplayValue(latest);
      });

      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [isInView, motionValue, rounded, target]);

  return (
    <div ref={ref} className="text-center">
      <motion.span
        className={`block font-serif text-5xl md:text-6xl ${light ? "text-white" : "text-charcoal"}`}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {displayValue}
        {suffix}
      </motion.span>
      <span className={`block font-sans text-sm uppercase tracking-widest mt-3 ${light ? "text-white/70" : "text-charcoal-light"}`}>
        {label}
      </span>
    </div>
  );
}
