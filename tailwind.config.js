/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      bellefair: ["Bellefair", "serif"],
      barlow: ["Barlow", "sans-serif"],
      "barlow-condensed": ["'Barlow Condensed'", "sans-serif"],
    },
    extend: {
      colors: {
        "dark-blue": "#0B0D17",
        "light-blue": "#D0D6F9",
      },
      screens: {
        lg: { min: "1440px" },
        md: { min: "700px" },
      },
    },
  },
  plugins: [],
};
