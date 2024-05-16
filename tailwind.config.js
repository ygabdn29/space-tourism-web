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
        "white-04": "rgba(255, 255, 255, 0.04)",
        "white-05": "rgba(255, 255, 255, 0.5)",
      },
      screens: {
        lg: { min: "1200px" },
        md: { min: "700px" },
      },
    },
  },
  plugins: [],
};
