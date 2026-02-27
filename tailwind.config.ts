import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      colors: {
        page: "#f5f5f9",
        surface: "#ffffff",
        "surface-muted": "#f7f7fb",
        "surface-soft": "#fafafc",
        ink: "#2d2d3a",
        "ink-muted": "#71717a",
        "ink-soft": "#a1a1aa",
        accent: "#6366f1",
        "accent-soft": "#eef2ff",
        success: "#10b981",
        warning: "#f59e0b",
        danger: "#ef4444",
        info: "#3b82f6",
        border: "#e5e7eb",
        "border-strong": "#d1d5db",
      },
      borderRadius: {
        card: "16px",
        panel: "20px",
        soft: "12px",
        pill: "999px",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        soft: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        inset: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
      },
      backgroundImage: {
        "page-glow":
          "radial-gradient(1200px 600px at 20% -10%, rgba(153, 136, 255, 0.35), transparent 60%), radial-gradient(900px 500px at 110% 0%, rgba(72, 210, 255, 0.18), transparent 55%), linear-gradient(180deg, #3c295c 0%, #2f2147 100%)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
        "fade-in": "fadeIn 0.5s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
