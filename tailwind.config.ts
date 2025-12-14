import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.25)" },
    },
  },
  plugins: [],
} satisfies Config;
