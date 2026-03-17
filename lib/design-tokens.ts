// Design tokens — aligned with globals.css
// Editorial accent (#2F4F75) is primary; link blue (#2F6FFC) reserved for external/legacy

export const accent = {
  primary: "#2F4F75",
  hover: "#243d5c",
} as const;

// Foreground Colors (for text and icons)
export const foregroundColors = {
  neutral: {
    primary: "#1C2129", // Neutral 1500
    secondary: "#4B5563", // Neutral 700
    tertiary: "#6B7280", // Neutral 500
    disallowed: "#D1D5DB", // Neutral 300
    reversed: "#F9FAFB", // Neutral 100
  },
  destructive: {
    light: "#F87171", // Status Red 400 (approximate)
    default: "#DC2626", // Status Red 700 (approximate)
    contrast: "#991B1B", // Status Red 1000 (approximate)
  },
  link: {
    default: "#2F6FFC", // Link 700
    contrast: "#1E40AF", // Link 1300 (approximate)
  },
  success: {
    light: "#58B09C", // Status Green 300
    default: "#2C7A7B", // Status Green 600
    contrast: "#123737", // Status Green 1300
  },
  warning: {
    light: "#EBAA38", // Status Amber 250
    default: "#9D6716", // Status Amber 700
  },
  attention: {
    light: "#8040C0", // Purple 600
    default: "#502878", // Purple 900
  },
};

// Background Colors
export const backgroundColors = {
  neutral: {
    canvas: "#F7F7F7", // Neutral 110
    surface: "#EFEFEF", // Neutral 120
    card: "#FCFCFC", // Neutral 100
    disallowed: "#D9D9D9", // Neutral 150
  },
  success: {
    primary: "#3E8260", // Status Green 600
    secondary: "#6ABDA1", // Status Green 300
    tertiary: "#285A43", // Status Green 1000
  },
  destructive: {
    primary: "#8E362A", // Status Red 1000
    secondary: "#B84739", // Status Red 700
    tertiary: "#6F2A21", // Status Red 1300
  },
  action: {
    primary: "#2E64D0", // Link 700
    secondary: "#5990EF", // Link 500
    tertiary: "#224BA6", // Link 1000
  },
  attention: {
    primary: "#6626C0", // Purple 900
    secondary: "#8446DE", // Purple 600
    tertiary: "#490E96", // Purple 1400
  },
  warning: {
    primary: "#905200", // Status Amber 700
    secondary: "#CA8C1D", // Status Amber 300
    tertiary: "#5E3300", // Status Amber 1000
  },
  visualization: {
    teal: "#BEDEF6", // Teal 130
    blue: "#C0DBF0", // Blue 150
    green: "#EEF5C0", // Green 120
    yellow: "#F9F5BD", // Yellow 120
    orange: "#F8E1CB", // Orange 130
    rose: "#F9CEDB", // Rose 150
  },
};

// Tint Colors (for overlays/transparency effects)
export const tintColors = {
  action: {
    light: "#0153C0", // 12% opacity
    mid: "#0153C0", // 24% opacity
    heavy: "#0153C0", // 50% opacity
  },
  neutral: {
    light: "#1C2129", // 6% opacity
    mid: "#1C2129", // 12% opacity
    heavy: "#1C2129", // 50% opacity
  },
  attention: {
    light: "#6515B5", // 12% opacity
    mid: "#6515B5", // 24% opacity
    heavy: "#6515B5", // 50% opacity
  },
  success: {
    light: "#36A68E", // 12% opacity
    mid: "#36A68E", // 24% opacity
    heavy: "#36A68E", // 50% opacity
  },
  destructive: {
    light: "#A72B13", // 12% opacity
    mid: "#A72B13", // 24% opacity
    heavy: "#A72B13", // 50% opacity
  },
};

// Button Colors (inferred from button variants)
export const buttonColors = {
  solid: {
    background: "#2F6FFC", // Link 700 - blue
    text: "#FFFFFF",
    hover: "#2563EB", // darker blue
  },
  outline: {
    background: "transparent",
    border: "#6B7280", // Neutral 500
    text: "#1C2129", // Neutral 1500
    hover: {
      background: "#F9FAFB", // Neutral 100
    },
  },
  ghost: {
    background: "transparent",
    text: "#2F6FFC", // Link 700
    hover: {
      background: "#EFF6FF", // light blue tint
    },
  },
  subtle: {
    background: "transparent",
    text: "#6B7280", // Neutral 500
    hover: {
      background: "#F9FAFB", // Neutral 100
    },
  },
};

// Chip Colors (from visualization palette)
export const chipColors = {
  grey: backgroundColors.neutral.surface,
  cyan: backgroundColors.visualization.teal,
  yellow: backgroundColors.visualization.yellow,
  orange: backgroundColors.visualization.orange,
};

// Blockquote Colors — aligned with editorial accent
export const blockquoteColors = {
  accent: "#2F4F75",
  text: "#1C2129",
  attribution: "#6B7280",
};
