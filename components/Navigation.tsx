import Link from "next/link";
import { site } from "@/lib/site";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import { ButtonLink } from "./Button";
import TextLink from "./TextLink";

export default function Navigation() {
  return (
    <header className="absolute border-b border-[var(--border-subtle)] bg-transparent z-10 w-full">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8 lg:px-12">
        <Link
          href="/"
          className="focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 rounded"
        >
          <Logo variant="dark" />
        </Link>
        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {site.navigation.slice(0, -1).map((item) => (
            <TextLink
              key={item.href}
              href={item.href}
              variant="reversed"
              className="text-sm font-medium"
            >
              {item.label}
            </TextLink>
          ))}
          {site.navigation.length > 0 && (
            <ButtonLink
              href={site.navigation[site.navigation.length - 1].href}
              variant="solid"
              size="sm"
            >
              {site.navigation[site.navigation.length - 1].label}
            </ButtonLink>
          )}
        </div>
        {/* Mobile nav */}
        <MobileNav />
      </nav>
    </header>
  );
}
