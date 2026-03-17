import Link from "next/link";
import { ArrowLeft } from "./icons";

export interface BackLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function BackLink({
  href,
  children,
  className = "",
}: BackLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1 font-medium text-[var(--accent)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 rounded ${className}`}
    >
      <ArrowLeft className="shrink-0" />
      {children}
    </Link>
  );
}
