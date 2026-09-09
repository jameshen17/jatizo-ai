import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#080709",
        panel: "#111014",
        ink: "#f7f2f7",
        muted: "#bbb3bd",
        line: "#2c2730",
        signal: "#e24a76",
        signalSoft: "#f3a4bb",
        gold: "#d7b25c"
      },
      boxShadow: {
        glow: "0 30px 100px rgba(226, 74, 118, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
