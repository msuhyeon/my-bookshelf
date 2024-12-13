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
        footer: "#292524",
        card: "#ec664a",
        genre: "#126dda",
      },
      screens: {
        lg: "1200px",
      },
    },
  },
  plugins: [],
} satisfies Config;
