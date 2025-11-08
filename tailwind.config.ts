import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#004aad",
        secondary: "#f4f6f9",
        accent: "#ffc107"
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Poppins", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"]
      },
      boxShadow: {
        card: "0 15px 35px rgba(0, 74, 173, 0.08)"
      },
      borderRadius: {
        "3xl": "1.75rem"
      }
    }
  },
  plugins: [forms]
};

export default config;
