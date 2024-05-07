/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        bodyFont: ["Poppins", "sans-serif"],
         titleFont: ["Montserrat", "sans-serif"],
      },
        colors:{
          bodyColor:"#000066",
          lightText:"#212428",
          boxBg:"linear-gradient(145deg,#0c214b, #012b56)",
          designColor:"#ff014f",
        },
    },
  },
  plugins: [],
}