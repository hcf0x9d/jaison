import React from "react";

export type ChipVariant = "grey" | "cyan" | "yellow" | "orange" | "tag";

export interface ChipProps {
  variant?: ChipVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<ChipVariant, string> = {
  grey: "bg-[var(--surface-neutral)] border border-[#D9D9D9]",
  cyan: "bg-[#BEDEF6] border-[#BEDEF6] border",
  yellow: "bg-[#F9F5BD] border-[#F9F5BD] border",
  orange: "bg-[#F8E1CB] border-[#F8E1CB] border",
  tag: "bg-[var(--accent)]/10 text-[var(--accent)] border-0",
};

export default function Chip({
  variant = "grey",
  children,
  className = "",
}: ChipProps) {
  const isTag = variant === "tag";
  return (
    <span
      className={`inline-flex items-center ${
        isTag
          ? "rounded px-2 py-0.5 text-xs font-medium uppercase tracking-wider md:py-1"
          : "rounded-md px-3 py-1.5 text-sm font-normal text-[var(--foreground)]"
      } ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
