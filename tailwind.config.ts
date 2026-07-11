import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FBFBF9",
        "bg-2": "#F3F2EE",
        panel: "#FFFFFF",
        charcoal: "#2B2B2B",
        "charcoal-2": "#3D3D3D",
        "ink-soft": "#6A6A66",
        "ink-faint": "#9A9A94",
        gold: "#E5A828",
        "gold-deep": "#C6871A",
        "gold-dark": "#8A5E12",
        "gold-tint": "#FBF1DC",
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      keyframes: {
        sweep: {
          "0%": { top: "-120px" },
          "55%": { top: "100%" },
          "100%": { top: "100%" },
        },
        pulse2: {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "100%": { transform: "scale(1.7)", opacity: "0" },
        },
        floatBadge: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        sweep: "sweep 3.8s ease-in-out infinite",
        pulse2: "pulse2 2.4s ease-out infinite",
        floatBadge: "floatBadge 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
