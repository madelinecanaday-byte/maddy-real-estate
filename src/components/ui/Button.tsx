"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-terracotta text-white hover:bg-terracotta-dark focus-visible:ring-terracotta",
  secondary:
    "bg-charcoal text-white hover:bg-charcoal-light focus-visible:ring-charcoal",
  outline:
    "border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-white focus-visible:ring-terracotta",
};

const sizeStyles: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center rounded-none font-sans font-medium tracking-wide uppercase text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseStyles} {...props}>
      {children}
    </button>
  );
}
