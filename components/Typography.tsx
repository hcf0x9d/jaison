import React from "react";
import { typographyClasses } from "@/lib/typography";

type HeadingSize = "2xl" | "xl" | "l" | "m" | "s" | "xs" | "2xs";
type HeadingWeight = "heavy" | "regular" | "medium" | "bold";
type BodySize = "small" | "baseline" | "large";
type BodyWeight = "regular" | "medium" | "bold";

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size: HeadingSize;
  weight?: HeadingWeight;
  children: React.ReactNode;
}

export interface BodyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "span" | "div";
  size: BodySize;
  weight?: BodyWeight;
  children: React.ReactNode;
}

const headingClassMap: Record<
  HeadingSize,
  Partial<Record<HeadingWeight, string>>
> = {
  "2xl": { heavy: typographyClasses["heading-2xl-heavy"] },
  xl: { heavy: typographyClasses["heading-xl-heavy"] },
  l: {
    heavy: typographyClasses["heading-l-heavy"],
    regular: typographyClasses["heading-l-regular"],
  },
  m: { heavy: typographyClasses["heading-m-heavy"] },
  s: {
    heavy: typographyClasses["heading-s-heavy"],
    medium: typographyClasses["heading-s-medium"],
  },
  xs: {
    heavy: typographyClasses["heading-xs-heavy"],
    medium: typographyClasses["heading-xs-medium"],
  },
  "2xs": {
    heavy: typographyClasses["heading-2xs-heavy"],
    bold: typographyClasses["heading-2xs-bold"],
    medium: typographyClasses["heading-2xs-medium"],
  },
};

const bodyClassMap: Record<
  BodySize,
  Partial<Record<BodyWeight, string>>
> = {
  small: {
    regular: typographyClasses["body-small-regular"],
    medium: typographyClasses["body-small-medium"],
    bold: typographyClasses["body-small-bold"],
  },
  baseline: {
    regular: typographyClasses["body-baseline-regular"],
    medium: typographyClasses["body-baseline-medium"],
    bold: typographyClasses["body-baseline-bold"],
  },
  large: {
    regular: typographyClasses["body-large-regular"],
    medium: typographyClasses["body-large-medium"],
    bold: typographyClasses["body-large-bold"],
  },
};

export function Heading({
  as,
  size,
  weight = "heavy",
  children,
  className = "",
  ...props
}: HeadingProps) {
  const Component = as || getDefaultHeadingTag(size);
  const classMap = headingClassMap[size];
  const typographyClass = classMap[weight] || classMap["heavy"] || "";

  return (
    <Component className={`${typographyClass} ${className}`} {...props}>
      {children}
    </Component>
  );
}

function getDefaultHeadingTag(size: HeadingSize): "h1" | "h2" | "h3" | "h4" {
  switch (size) {
    case "2xl":
    case "xl":
      return "h1";
    case "l":
    case "m":
      return "h2";
    case "s":
    case "xs":
      return "h3";
    case "2xs":
      return "h4";
  }
}

export function Body({
  as = "p",
  size,
  weight = "regular",
  children,
  className = "",
  ...props
}: BodyProps) {
  const Component = as;
  const classMap = bodyClassMap[size];
  const typographyClass = classMap[weight] || classMap["regular"] || "";

  return (
    <Component className={`${typographyClass} ${className}`} {...props}>
      {children}
    </Component>
  );
}
