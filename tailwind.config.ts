import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05070D",
        foreground: "#ffffff",
        navy: {
          900: "#080B12",
          800: "#111827",
        },
        accent: {
          cyan: "#06b6d4",
          violet: "#8b5cf6",
          lime: "#a3e635",
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #8b5cf633 0deg, #06b6d433 180deg, #8b5cf633 360deg)',
      },
    },
  },
  plugins: [],
};
export default config;
