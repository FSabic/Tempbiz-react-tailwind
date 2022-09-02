/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {

        'Antic': "'Antic', sans-serif",
        'OpenSans': "'Open Sans', sans-serif",
        'Josefin': "'Josefin Sans', sans-serif",
      },
    },
  },
  plugins: [],
}
