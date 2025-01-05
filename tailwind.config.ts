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
      },
      spacing: {
        xs: "8px",
        sm: "16px",
        lg: "40px",
        xl: "60px",
      },
      fontSize: {
        sm: "16px",
        md: "24px",
      },
    },
  },
  plugins: [],
} satisfies Config;
