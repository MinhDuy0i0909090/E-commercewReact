/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f0f2f5",
        secondary: "#ff813f",
        tertiary: "#222222",
        secondaryRed: "#f42c37",
        primaryRed: "#FF4C4C",
        secondaryPeach: "#FFDFD6",
        secondaryYellow: "#fdc62e",
        primaryYellow: "#FFFF80",
        secondaryGreen: "#2dcc6f",
        secondaryBlue: "#1376f4",
        primaryBlue: "#4793AF",
        secondaryWhite: "#eeeeee",
        secondaryGrey:"#E4DCCF",
        primaryGrey:"#F6F6F6",
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      backgroundImage: {
        hero: "url(/src/assets/bg.png)",
        pattern: "url(/src/assets/pattern.png)",
        banneroffer: "url(/src/assets/banneroffer.png)",
      },
    },
  },
  plugins: [],
};
