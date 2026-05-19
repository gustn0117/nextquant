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
          bg: "#FAFAFB",
          surface: "#FFFFFF",
          card: "#FFFFFF",
          subtle: "#F4F6FA",
          line: "#E5E7EB",
          lineSoft: "#EEF1F6",
          primary: "#00B783",
          primaryDim: "#008F66",
          primarySoft: "#E6F8F2",
          accent: "#3B82F6",
          accentSoft: "#EAF2FF",
          warn: "#F59E0B",
          text: "#0F172A",
          subText: "#334155",
          muted: "#64748B",
          mutedSoft: "#94A3B8",
          ink: "#080F1E",
        },
      },
      fontFamily: {
        sans: ["Pretendard", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.65" }],
        sm: ["0.875rem", { lineHeight: "1.65" }],
        base: ["1rem", { lineHeight: "1.7" }],
        lg: ["1.125rem", { lineHeight: "1.7" }],
        xl: ["1.25rem", { lineHeight: "1.6" }],
        "2xl": ["1.5rem", { lineHeight: "1.5" }],
        "3xl": ["1.875rem", { lineHeight: "1.4" }],
        "4xl": ["2.25rem", { lineHeight: "1.3" }],
        "5xl": ["3rem", { lineHeight: "1.2" }],
        "6xl": ["3.75rem", { lineHeight: "1.15" }],
        "7xl": ["4.5rem", { lineHeight: "1.1" }],
        "8xl": ["6rem", { lineHeight: "1.05" }],
      },
      backgroundImage: {
        "hero-soft":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,183,131,0.10), transparent 60%), radial-gradient(ellipse 60% 50% at 100% 30%, rgba(59,130,246,0.10), transparent 60%)",
        "grid-soft":
          "linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)",
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -8px rgba(15,23,42,0.08)",
        card: "0 1px 0 rgba(15,23,42,0.04), 0 12px 36px -12px rgba(15,23,42,0.12)",
        ring: "0 0 0 6px rgba(0,183,131,0.10)",
        elevated:
          "0 1px 0 rgba(15,23,42,0.04), 0 24px 60px -24px rgba(15,23,42,0.18)",
        depth:
          "0 1px 0 rgba(15,23,42,0.04), 0 2px 4px rgba(15,23,42,0.04), 0 10px 30px -8px rgba(15,23,42,0.10), 0 30px 60px -16px rgba(15,23,42,0.12)",
        glow: "0 20px 60px -20px rgba(0,183,131,0.45)",
        innerSoft: "inset 0 1px 0 rgba(255,255,255,0.6)",
        darkDepth:
          "inset 0 1px 0 rgba(255,255,255,0.06), 0 20px 50px -10px rgba(0,0,0,0.55)",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        "fade-in": "fadeIn 0.6s ease-out both",
        ticker: "ticker 35s linear infinite",
        "ticker-slow": "ticker 60s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        blob: "blob 14s ease-in-out infinite",
        "gradient-pan": "gradientPan 8s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        shimmer: "shimmer 3s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "marquee-tick": "ticker 45s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(20px,-30px) scale(1.08)" },
          "66%": { transform: "translate(-25px,20px) scale(0.95)" },
        },
        gradientPan: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
