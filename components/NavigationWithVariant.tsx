"use client";

import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import Navigation, { type NavigationVariant } from "./Navigation";

function getVariantForPath(pathname: string): NavigationVariant {
  const darkPaths = site.navigationDarkPaths ?? [];
  const isDark = darkPaths.some((path) =>
    path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(path + "/")
  );
  return isDark ? "dark" : "light";
}

export default function NavigationWithVariant() {
  const pathname = usePathname();
  const variant = getVariantForPath(pathname ?? "/");
  return <Navigation variant={variant} />;
}
