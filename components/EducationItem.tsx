import React from "react";
import { Heading, Body } from "./Typography";

export interface EducationItemProps {
  degree?: string;
  certificate?: string;
  date?: string;
  years?: string;
  institution: string;
  className?: string;
}

export default function EducationItem({
  degree,
  certificate,
  date,
  years,
  institution,
  className = "",
}: EducationItemProps) {
  const title = certificate ?? degree ?? "";
  const when = years ?? date ?? "";

  return (
    <div className={`mb-4 ${className}`}>
      <Heading size="2xs" weight="bold" className="mb-1 text-[var(--foreground)]">
        {title}
      </Heading>
      <Body size="small" weight="regular" className="text-[var(--text-tertiary)]">
        {when} · {institution}
      </Body>
    </div>
  );
}
