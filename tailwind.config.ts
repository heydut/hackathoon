import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    // Preline
    "./node_modules/preline/preline.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Outfit", "serif"],
      title: ["Outfit", "serif"],
    },
    extend: {},
  },
  plugins: [require("preline/plugin")],
} satisfies Config;
