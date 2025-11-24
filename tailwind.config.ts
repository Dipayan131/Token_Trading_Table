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
        background: "#050505", // Very dark background
        card: "#0A0A0A", // Slightly lighter for cards
        "card-hover": "#111111",
        primary: "#3B82F6", // Blue
        secondary: "#10B981", // Green
        accent: "#F43F5E", // Red/Pink
        "axiom-green": "#00FF94", // Neon Green
        "axiom-red": "#FF3B30", // Neon Red
        "axiom-blue": "#007AFF", // Bright Blue
        "axiom-gold": "#FFD700", // Gold
        muted: "#525252",
        border: "#262626",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
