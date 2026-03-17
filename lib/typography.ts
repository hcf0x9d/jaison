// Typography system using Inter font
// Based on design system screenshots

export const typography = {
  // Heading styles
  heading: {
    "2xl": {
      heavy: {
        fontSize: "61px",
        lineHeight: "80px",
        fontWeight: 900, // Heavy
      },
    },
    xl: {
      heavy: {
        fontSize: "49px",
        lineHeight: "64px",
        fontWeight: 900, // Heavy
      },
    },
    l: {
      heavy: {
        fontSize: "39px",
        lineHeight: "48px",
        fontWeight: 900, // Heavy
      },
      regular: {
        fontSize: "39px",
        lineHeight: "48px",
        fontWeight: 400, // Regular
      },
    },
    m: {
      heavy: {
        fontSize: "31px",
        lineHeight: "40px",
        fontWeight: 900, // Heavy
      },
    },
    s: {
      heavy: {
        fontSize: "25px",
        lineHeight: "32px",
        fontWeight: 900, // Heavy
      },
      medium: {
        fontSize: "25px",
        lineHeight: "32px",
        fontWeight: 500, // Medium
      },
    },
    xs: {
      heavy: {
        fontSize: "20px",
        lineHeight: "32px",
        fontWeight: 900, // Heavy
      },
      medium: {
        fontSize: "20px",
        lineHeight: "32px",
        fontWeight: 500, // Medium
      },
    },
    "2xs": {
      heavy: {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 900, // Heavy
      },
      bold: {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 700, // Bold
      },
      medium: {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 500, // Medium
      },
    },
  },
  // Body styles
  body: {
    small: {
      regular: {
        fontSize: "12px",
        lineHeight: "16px",
        fontWeight: 400, // Regular
      },
      medium: {
        fontSize: "12px",
        lineHeight: "16px",
        fontWeight: 500, // Medium
      },
      bold: {
        fontSize: "12px",
        lineHeight: "16px",
        fontWeight: 700, // Bold
      },
    },
    baseline: {
      regular: {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 400, // Regular
      },
      medium: {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 500, // Medium
      },
      bold: {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 700, // Bold
      },
    },
    large: {
      regular: {
        fontSize: "20px",
        lineHeight: "32px",
        fontWeight: 400, // Regular
      },
      medium: {
        fontSize: "20px",
        lineHeight: "32px",
        fontWeight: 500, // Medium
      },
      bold: {
        fontSize: "20px",
        lineHeight: "32px",
        fontWeight: 700, // Bold
      },
    },
  },
};

// Typography utility classes for Tailwind
export const typographyClasses = {
  // Headings
  "heading-2xl-heavy": "text-[61px] leading-[80px] font-black",
  "heading-xl-heavy": "text-[49px] leading-[64px] font-black",
  "heading-l-heavy": "text-[39px] leading-[48px] font-black",
  "heading-l-regular": "text-[39px] leading-[48px] font-normal",
  "heading-m-heavy": "text-[31px] leading-[40px] font-black",
  "heading-s-heavy": "text-[25px] leading-[32px] font-black",
  "heading-s-medium": "text-[25px] leading-[32px] font-medium",
  "heading-xs-heavy": "text-[20px] leading-[32px] font-black",
  "heading-xs-medium": "text-[20px] leading-[32px] font-medium",
  "heading-2xs-heavy": "text-base leading-6 font-black",
  "heading-2xs-bold": "text-base leading-6 font-bold",
  "heading-2xs-medium": "text-base leading-6 font-medium",
  
  // Body
  "body-small-regular": "text-xs leading-4 font-normal",
  "body-small-medium": "text-xs leading-4 font-medium",
  "body-small-bold": "text-xs leading-4 font-bold",
  "body-baseline-regular": "text-base leading-6 font-normal",
  "body-baseline-medium": "text-base leading-6 font-medium",
  "body-baseline-bold": "text-base leading-6 font-bold",
  "body-large-regular": "text-[20px] leading-8 font-normal",
  "body-large-medium": "text-[20px] leading-8 font-medium",
  "body-large-bold": "text-[20px] leading-8 font-bold",
};
