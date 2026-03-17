import React from "react";
import { Heading, Body } from "./Typography";

export interface ExperienceItemProps {
  dateRange: string;
  company: string;
  title: string;
  description?: string;
  items?: readonly string[];
  className?: string;
}

export default function ExperienceItem({
  dateRange,
  company,
  title,
  description,
  items,
  className = "",
}: ExperienceItemProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <Body size="small" weight="regular" className="mb-1 text-[var(--text-tertiary)]">
        {dateRange}
      </Body>
      <Body size="baseline" weight="medium" className="mb-1 text-[var(--text-muted)]">
        {company}
      </Body>
      <Heading size="s" weight="heavy" className="mb-2 text-[var(--foreground)]">
        {title}
      </Heading>
      {description && (
        <Body size="baseline" weight="regular" className="text-[var(--foreground)]">
          {description}
        </Body>
      )}
      {items && items.length > 0 && (
        <ul className="mt-2 list-disc space-y-1 pl-6">
          {items.map((item) => (
            <li key={item}>
              <Body size="baseline" weight="regular" className="text-[var(--foreground)]">
                {item}
              </Body>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
