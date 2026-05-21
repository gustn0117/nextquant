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
          bg: "#FFFFFF",
          surface: "#FFFFFF",
          card: "#FFFFFF",
          subtle: "#F6F6F7",
          line: "#E5E5E5",
          lineSoft: "#EFEFEF",
          primary: "#A92D23",
          primaryDim: "#8E241C",
          primarySoft: "#FBECEA",
          accent: "#A92D23",
          accentSoft: "#FBECEA",
          warn: "#F59E0B",
          text: "#222222",
          subText: "#444444",
          muted: "#7B7B7B",
          mutedSoft: "#9E9E9E",
          ink: "#16181D",
        },
      },
      fontFamily: {
        sans: [
          "Nanum Square Neo",
          "Pretendard",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.65" }],
        sm: ["0.875rem", { lineHeight: "1.65" }],
        base: ["1rem", { lineHeight: "1.7" }],
        lg: ["1.125rem", { lineHeight: "1.7" }],
        xl: ["1.25rem", { lineHeight: "1.6" }],
        "2xl": ["1.5rem", { lineHeight: "1.45" }],
        "3xl": ["1.875rem", { lineHeight: "1.32" }],
        "4xl": ["2.25rem", { lineHeight: "1.24" }],
        "5xl": ["3rem", { lineHeight: "1.16" }],
        "6xl": ["3.75rem", { lineHeight: "1.1" }],
        "7xl": ["4.5rem", { lineHeight: "1.06" }],
        "8xl": ["6rem", { lineHeight: "1.04" }],
      },
      backgroundImage: {
        "hero-soft":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(169,45,35,0.10), transparent 60%), radial-gradient(ellipse 60% 50% at 100% 30%, rgba(169,45,35,0.06), transparent 60%)",
        "grid-soft":
          "linear-gradient(rgba(34,34,34,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34,34,34,0.05) 1px, transparent 1px)",
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20,20,24,0.04), 0 8px 24px -8px rgba(20,20,24,0.10)",
        card: "0 1px 0 rgba(20,20,24,0.04), 0 12px 36px -12px rgba(20,20,24,0.14)",
        ring: "0 0 0 6px rgba(169,45,35,0.10)",
        elevated:
          "0 1px 0 rgba(20,20,24,0.04), 0 24px 60px -24px rgba(20,20,24,0.20)",
        depth:
          "0 1px 0 rgba(20,20,24,0.04), 0 2px 4px rgba(20,20,24,0.05), 0 10px 30px -8px rgba(20,20,24,0.12), 0 30px 60px -16px rgba(20,20,24,0.14)",
        glow: "0 20px 55px -18px rgba(169,45,35,0.50)",
        innerSoft: "inset 0 1px 0 rgba(255,255,255,0.6)",
        darkDepth:
          "inset 0 1px 0 rgba(255,255,255,0.06), 0 20px 50px -10px rgba(0,0,0,0.55)",
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      // 둥근 모서리 최소화 — 각진 디자인 (원형 full만 유지)
      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "2px",
        md: "2px",
        lg: "3px",
        xl: "4px",
        "2xl": "5px",
        "3xl": "6px",
        full: "9999px",
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
