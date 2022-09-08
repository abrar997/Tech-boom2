/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        100: "100%",
        90: "90%",
        40: "40%",
        70: "70%",
        75: "75%",
        50: "50%",
        30: "30%",
        25: "25%",
        20: "20%",
        10: "120px",
        img: "310px",
      },
      height: {
        100: "120vh",
        90:"40vh",
        75: "75%",
        40: "40%",
        60: "60%",
        img: "340px",
      },
      colors: { 
        main: "#eee",
        gray: "gray",
        dark: "black",
      },
      screens: {
        phone: "450px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        laptop: "1536px",
      },
    },
  },
  plugins: [],
};
