import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // <--- Tambahkan baris ini
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0F",
          surface: "#15151D",
          card: "#1B1B25",
          line: "#2A2A36",
        },
        paper: "#F5F3EC",
        cyan: {
          DEFAULT: "#00C2D1",
          dim: "#0A8E9A",
        },
        magenta: {
          DEFAULT: "#FF2D6F",
          dim: "#C71F56",
        },
        yellow: {
          DEFAULT: "#FFD400",
          dim: "#D9B400",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "cmyk-glow":
          "radial-gradient(circle at 20% 20%, rgba(0,194,209,0.35), transparent 45%), radial-gradient(circle at 80% 25%, rgba(255,45,111,0.35), transparent 45%), radial-gradient(circle at 50% 80%, rgba(255,212,0,0.25), transparent 50%)",
        "cmyk-text":
          "linear-gradient(90deg, #00C2D1 0%, #FF2D6F 50%, #FFD400 100%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(12px,-10px)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        drift: "drift 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;