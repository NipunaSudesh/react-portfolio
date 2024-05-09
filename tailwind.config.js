/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bodyFont: ["Poppins", "sans-serif"],
         titleFont: ["Montserrat", "sans-serif"],
      },
        colors:{
          bodyColor:"#081434",
          lightText:"#007bff",
          boxBg: "linear-gradient(145deg, #01e202, #23272b)",
          designColor:"#ff014f",
        },
        boxShadow:{
          shadowOne:"10px 10px 19px #1c1e22 -10px -10px 19px #262a2e"
        }

    },
  },
  plugins: [],
};

