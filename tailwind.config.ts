import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "var(--secondary)",
        primary: "var(--primary)",
        outline: "var(--outline)",
      },
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "2.5rem",
        lg: "5rem",
      },
      fontSize: {
        sm: "1rem",
        md: "1.5rem",
      },
      screens: {
        md: "786px",
        xl: "1176px",
      },
    },
  },
  plugins: [],
} satisfies Config;
