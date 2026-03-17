import React from "react";
import Link from "next/link";
import { ArrowRight } from "./icons";

export type ButtonVariant = "solid" | "solidDark" | "outline" | "outlineOnDark" | "ghost" | "subtle";
export type ButtonSize = "sm" | "md" | "lg";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

const variantStyles: Record<ButtonVariant, string> = {
  solid:
    "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] focus:ring-[var(--accent)]",
  solidDark:
    "bg-[#1a1a1f] text-white hover:opacity-90 focus:ring-[var(--accent)]",
  outline:
    "bg-transparent border border-[var(--border-subtle)] text-[var(--foreground)] hover:border-[var(--accent)]/30 hover:text-[var(--accent)] focus:ring-[var(--accent)]",
  outlineOnDark:
    "bg-transparent border border-[#e5e3df] text-[#fdfcfa] hover:border-[#ebeae7] hover:bg-white/5 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[#2a2a2e]",
  ghost:
    "bg-transparent text-[var(--accent)] hover:bg-[var(--surface-soft)] focus:ring-[var(--accent)]",
  subtle:
    "bg-transparent text-[var(--text-tertiary)] hover:bg-[var(--surface-soft)] focus:ring-[var(--text-tertiary)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3.5 text-base",
  lg: "px-7 py-4 text-base",
};

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  icon?: React.ReactNode | null;
  iconPosition?: "left" | "right";
  showDefaultIcon?: boolean;
}

export default function Button({
  variant = "solid",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  showDefaultIcon = false,
  className = "",
  ...props
}: ButtonProps) {
  const displayIcon =
    icon !== undefined
      ? icon
      : showDefaultIcon
        ? <ArrowRight className="h-4 w-4 shrink-0 text-current" />
        : null;

  const styles = variantStyles[variant] ?? variantStyles.solid;

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${styles} ${className}`}
      {...props}
    >
      {iconPosition === "left" && displayIcon}
      {children}
      {iconPosition === "right" && displayIcon}
    </button>
  );
}

export interface ButtonLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  icon?: React.ReactNode | null;
  iconPosition?: "left" | "right";
  showDefaultIcon?: boolean;
  fullWidth?: boolean;
}

export function ButtonLink({
  href,
  variant = "solid",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  showDefaultIcon = false,
  fullWidth = false,
  className = "",
  ...props
}: ButtonLinkProps) {
  const displayIcon =
    icon !== undefined
      ? icon
      : showDefaultIcon
        ? <ArrowRight className="h-4 w-4 shrink-0 text-current md:h-5 md:w-5" />
        : null;

  const styles = variantStyles[variant] ?? variantStyles.solid;

  const linkClassName = `${baseStyles} ${sizeStyles[size]} ${styles} ${
    fullWidth ? "w-full sm:w-auto" : ""
  } ${className}`;

  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
        {...props}
      >
        {iconPosition === "left" && displayIcon}
        {children}
        {iconPosition === "right" && displayIcon}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClassName} {...props}>
      {iconPosition === "left" && displayIcon}
      {children}
      {iconPosition === "right" && displayIcon}
    </Link>
  );
}
