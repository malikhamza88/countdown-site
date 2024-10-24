/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#34495E",
          50: "#EFF2F4",
          100: "#D5DDE4",
          200: "#A5B4C3",
          300: "#758BA1",
          400: "#4D6275",
          500: "#34495E",
          600: "#2C3E50",
          700: "#233242",
          800: "#1A2530",
          900: "#11181F",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
