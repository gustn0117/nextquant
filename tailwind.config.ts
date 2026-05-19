import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0A0E1A",
          surface: "#11172A",
          card: "#161E36",
          line: "#1F2A44",
          primary: "#00E5A8",
          primaryDim: "#00B68A",
          accent: "#3D8BFF",
          text: "#E6EAF2",
          muted: "#8A93A6",
        },
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at center, rgba(0,229,168,0.08), transparent 60%)",
        "hero-glow":
          "radial-gradient(ellipse at top, rgba(0,229,168,0.18), transparent 60%), radial-gradient(ellipse at bottom right, rgba(61,139,255,0.15), transparent 60%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "ticker": "ticker 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
