"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { ButtonLink } from "./Button";
import type { NavigationVariant } from "./Navigation";

export interface MobileNavProps {
  variant?: NavigationVariant;
}

export default function MobileNav({ variant = "dark" }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md hover:bg-[var(--surface-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 ${
          variant === "light"
            ? "text-[var(--foreground)]"
            : "text-[var(--text-reversed)]"
        }`}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <span
          className={`block h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
        />
        <span className={`block h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
        <span
          className={`block h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>
      {/* Backdrop for mobile */}
      <div
        id="mobile-nav-backdrop"
        className={`fixed inset-0 top-16 z-40 bg-black/20 transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <div
        id="mobile-nav"
        className={`absolute left-0 right-0 top-full z-50 border-b border-[var(--border-subtle)] bg-[var(--background)] shadow-lg transition-all duration-200 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-4">
          {site.navigation.map((item) =>
            item.label === "Contact" ? (
              <ButtonLink
                key={item.href}
                href={item.href}
                variant="solid"
                size="md"
                className="justify-start"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </ButtonLink>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-3 text-base font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-soft)] hover:text-[var(--accent)]"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </div>
  );
}
