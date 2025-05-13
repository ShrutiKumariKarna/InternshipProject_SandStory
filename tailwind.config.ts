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
        g900: 'var(--G900, #100F14)',
        g300: 'var(--G300, #CBCAD7)',
        g800: 'var(--G800, #19181F)',
        g500: 'var(--G500, #686677)',
        g400: 'var(--G400, #9794AA)',
        g600: 'var(--G600, #49475A)',
        g50: 'var(--G50, #F6F6F8)', 
        g25: 'var(--G25, #FCFCFC)'
      },
      fontFamily: {
        sans: ["Sofia Pro", "sans-serif"], 
        inter: ["Inter", "sans-serif"], 
      },
    },
  },
  plugins: [],
} satisfies Config;
