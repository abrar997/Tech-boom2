/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        100: "100%",
        90: "90%",
        80: "85%",
        40: "40%",
        70: "70%",
        75: "75%",
        50: "50%",
        30: "30%",
        25: "25%",
        20: "20%",
        imgb: "200px",
        10: "120px",
        img: "310px",
      },
      height: {
        100: "120vh",
        90: "100vh",
        80: "80vh",
        75: "75%",
        70: "70vh",
        60: "60vh",
        65: "61vh",
        40: "40%",
        45:"200px" ,
        60: "60%",
        img: "340px",
        imgb:"140px"
        
      },
      colors: {
        main: "#eee",
        gray: "gray",
        dark: "black",
      },
      screens: {
        phone: "665px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        laptop: "1536px",
      },
    },
  },
  plugins: [],
};
