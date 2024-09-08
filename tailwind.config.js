/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#d1e9f6",
          200: "#a3d3ec",
          300: "#76bee3",
          400: "#48a8d9",
          500: "#1a92d0",
          600: "#1575a6",
          700: "#10587d",
          800: "#0a3a53",
          900: "#051d2a",
        },
      },
    },
  },
  plugins: [],
};
