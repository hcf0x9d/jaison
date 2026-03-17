import React from "react";
import Link from "next/link";
import { Heading, Body } from "./Typography";
import { ArrowRight } from "./icons";

export interface CaseStudyCardProps {
  category: string;
  title: string;
  description: string;
  href: string;
  className?: string;
}

export default function CaseStudyCard({
  category,
  title,
  description,
  href,
  className = "",
}: CaseStudyCardProps) {
  return (
    <Link
      href={href}
      className={`link-arrow block p-6 rounded-lg border border-[var(--divider)] hover:border-[var(--border-subtle)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 rounded ${className}`}
    >
      <div className="mb-2">
        <Body size="small" weight="regular" className="text-[var(--text-tertiary)]">
          {category}
        </Body>
      </div>
      <Heading size="l" weight="heavy" className="mb-3 text-[var(--foreground)]">
        {title}
      </Heading>
      <Body size="baseline" weight="regular" className="mb-4 text-[var(--text-muted)]">
        {description}
      </Body>
      <span className="inline-flex items-center gap-2 text-[var(--accent)] font-medium">
        View case study <ArrowRight className="arrow shrink-0" />
      </span>
    </Link>
  );
}
