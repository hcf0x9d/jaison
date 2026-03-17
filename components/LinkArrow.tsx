import Link from "next/link";
import { ArrowRight } from "./icons";

const linkArrowBase =
  "link-arrow inline-flex items-center gap-2 font-medium text-[var(--accent)] transition-colors duration-200 hover:text-[var(--accent-hover)]";

export interface LinkArrowProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function LinkArrow({
  href,
  children,
  className = "",
}: LinkArrowProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${linkArrowBase} text-[0.9375rem] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 rounded ${className}`}
      >
        {children}
        <ArrowRight className="arrow text-sm shrink-0" />
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${linkArrowBase} text-[0.9375rem] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 rounded ${className}`}
    >
      {children}
      <ArrowRight className="arrow text-sm shrink-0" />
    </Link>
  );
}

/** Visual-only version for use inside a parent Link (e.g. card) */
export function LinkArrowDisplay({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`${linkArrowBase} ${className}`}>
      {children}
      <ArrowRight className="arrow text-sm shrink-0" />
    </span>
  );
}
