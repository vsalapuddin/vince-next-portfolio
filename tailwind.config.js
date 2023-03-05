/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"font-serif"', "font-serif"],
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
