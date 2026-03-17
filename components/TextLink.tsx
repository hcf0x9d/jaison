import Link from "next/link";

export type TextLinkVariant = "accent" | "muted" | "reversed";

export interface TextLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  href: string;
  variant?: TextLinkVariant;
  children: React.ReactNode;
  external?: boolean;
}

const variantStyles: Record<TextLinkVariant, string> = {
  accent:
    "font-medium text-[var(--accent)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 rounded",
  muted:
    "text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 rounded",
  reversed:
    "text-sm text-[var(--text-reversed)] transition-colors hover:text-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 rounded",
};

export default function TextLink({
  href,
  variant = "accent",
  children,
  external,
  className = "",
  ...props
}: TextLinkProps) {
  const isExternal =
    external ?? (href.startsWith("http") || href.startsWith("mailto:"));

  const linkClassName = `${variantStyles[variant]} ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClassName} {...props}>
      {children}
    </Link>
  );
}
