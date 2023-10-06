/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      borderColor: "#ffbe30",
      headerColor: "#333333",
      paraColor: "#878787"
    },
    fontFamily: {
      'openSans': "'Open Sans', sans-serif",
      'roboto': "'Roboto', sans-serif"

    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

