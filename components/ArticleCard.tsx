import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heading, Body } from "./Typography";
import { ArrowRight } from "./icons";

export interface ArticleCardProps {
  image?: string;
  imageAlt?: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  href: string;
  sourceLabel?: string;
  className?: string;
}

export default function ArticleCard({
  image,
  imageAlt = "Article image",
  date,
  readTime,
  title,
  description,
  href,
  sourceLabel,
  className = "",
}: ArticleCardProps) {
  return (
    <Link
      href={href}
      className={`link-arrow flex gap-4 p-4 rounded-lg border border-[var(--divider)] hover:border-[var(--border-subtle)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 rounded ${className}`}
    >
      {image && (
        <div className="flex-shrink-0">
          <Image
            src={image}
            alt={imageAlt}
            width={120}
            height={120}
            className="rounded-md object-cover"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="mb-2">
          <Body size="small" weight="regular" className="text-[var(--text-tertiary)]">
            {date} · {readTime}
          </Body>
        </div>
        <Heading size="m" weight="heavy" className="mb-2 text-[var(--foreground)]">
          {title}
        </Heading>
        <Body size="baseline" weight="regular" className="mb-3 text-[var(--text-muted)]">
          {description}
        </Body>
        <div className="inline-flex items-center gap-1 text-[var(--accent)] font-semibold">
          <span>{sourceLabel ? `Read on ${sourceLabel}` : "Read more"}</span>
          <ArrowRight className="arrow shrink-0" />
        </div>
      </div>
    </Link>
  );
}
