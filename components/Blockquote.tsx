import React from "react";

export interface BlockquoteProps {
  quote: string;
  attribution: string;
  className?: string;
}

export default function Blockquote({
  quote,
  attribution,
  className = "",
}: BlockquoteProps) {
  return (
    <blockquote
      className={`flex gap-4 border-l-4 border-[var(--accent)] pl-4 ${className}`}
    >
      <div className="flex-1">
        <p className="text-[20px] leading-[32px] font-medium italic mb-2 text-[var(--foreground)]">
          {quote}
        </p>
        <p className="text-base leading-6 font-normal text-[var(--text-tertiary)]">
          {attribution}
        </p>
      </div>
    </blockquote>
  );
}
