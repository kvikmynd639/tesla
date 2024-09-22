import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "model-y": "url('/hero/Homepage-Model-Y-Desktop-US-v2.avif')",
        "model-3": "url('/hero/Homepage-Model-3-Desktop-US.avif')",
        "model-s": "url('/hero/Homepage-Model-S-Desktop-US.avif')",
        "powerwall": "url('/hero/Homepage-Powerwall-Desktop-US.avif')",
        "solarpanels":"url('/hero/Homepage-SolarPanels-01-Desktop.avif')",
        "solarroof":"url('/hero/Homepage-SolarRoof-Desktop-US.avif')",
        "cybertruck":"url('/hero/Homepage-Cybertruck-Desktop-v3.avif')",
        "accessories":"url('/hero/Homepage-Accessories-Desktop-US.avif')",


      }
    },
  },
  plugins: [],
};
export default config;
