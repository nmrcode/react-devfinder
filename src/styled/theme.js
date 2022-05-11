export const baseTheme = {
  colors: {
    main: "#F2F7FF",
    secondary: "rgba(242,247,255,0.54)",
    accent: "#0178FF",
    bgDark: "#141C2F",
    bgLight: "#1F2A48",
  },

  shape: {
    radii: "12px",
  },

  maxMedia: {
    sm: "max-width: 576px",
    md: "max-width: 768px",
    lg: "max-width: 992px",
    xl: "max-width: 1200px",
    xxl: "max-width: 1400px",
  },
};

export const darkTheme = {
  ...baseTheme,
  colors: {
    main: "#030409",
    secondary: "rgba(3,4,9,0.64)",
    accent: "#0178FF",
    bgDark: "#F5F8FF",
    bgLight: "#FEFEFE",
  },
};
