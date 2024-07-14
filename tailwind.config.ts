import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/twdy-theme/**/*.{js,ts,jsx,tsx,mdx}", // Include twr-theme
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          25: "var(--primary-25)",
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
          950: "var(--primary-950)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          50: "var(--secondary-50)",
          100: "var(--secondary-100)",
          200: "var(--secondary-200)",
          300: "var(--secondary-300)",
          400: "var(--secondary-400)",
          500: "var(--secondary-500)",
          600: "var(--secondary-600)",
          700: "var(--secondary-700)",
          800: "var(--secondary-800)",
          900: "var(--secondary-900)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient": "conic-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {
        slideOutLeft: {
          "0%": { opacity: 1, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(-100%)" },
        },
        slideOutRight: {
          "0%": { opacity: 1, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(100%)" },
        },
        slideOutTop: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(-100%)" },
        },
        slideOutBottom: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(100%)" },
        },
        slideInLeft: {
          "0%": { opacity: 0, transform: "translateX(-100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideInTop: {
          "0%": { opacity: 0, transform: "translateY(-100%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideInBottom: {
          "0%": { opacity: 0, transform: "translateY(100%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeOut: {
          "0%": { opacity: 1, height: "auto" },
          "100%": { opacity: 0, height: 0 },
        },
        fadeIn: {
          "0%": { opacity: 0, height: 0 },
          "100%": { opacity: 1, height: "auto" },
        },
      },
      animation: {
        slideOutLeft: "slideOutLeft 0.5s ease-out forwards",
        slideOutRight: "slideOutRight 0.5s ease-out forwards",
        slideOutTop: "slideOutTop 0.5s ease-out forwards",
        slideOutBottom: "slideOutBottom 0.5s ease-out forwards",
        slideInLeft: "slideInLeft 0.5s ease-in forwards",
        slideInRight: "slideInRight 0.5s ease-in forwards",
        slideInTop: "slideInTop 0.5s ease-in forwards",
        slideInBottom: "slideInBottom 0.5s ease-in forwards",
        fadeOut: "fadeOut 0.5s ease-out forwards",
        fadeIn: "fadeIn 0.5s ease-in forwards",
      },
      variants: {
        animation: ["responsive", "motion-safe", "motion-reduce"],
      },
    },
  },
  plugins: [],
};

export default config;
