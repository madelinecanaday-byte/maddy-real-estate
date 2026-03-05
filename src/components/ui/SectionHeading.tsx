import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center")}>
      {subtitle && (
        <p
          className={cn(
            "uppercase tracking-widest text-sm font-sans mb-3",
            light ? "text-terracotta-light" : "text-terracotta"
          )}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={cn(
          "font-serif text-4xl md:text-5xl leading-tight",
          light ? "text-white" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "w-16 h-0.5 bg-terracotta mt-6",
          centered && "mx-auto"
        )}
      />
    </div>
  );
}
