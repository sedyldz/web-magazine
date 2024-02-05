const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: colors.neutral,
        primary: colors.sky,
        green: "#339933"
      },
    },
    fontFamily: {
      serif: ["ChronicleDisplay", "serif"],
      sans: ["HelveticaNeue", "sans-serif"],
    },
    fontSize: {
      sm: ['13px', '17px'],
      xs: ['15px', '19px'],
      base: ['17px', '23px'],
      md: ['19px', '23px'],
      body: ['21px', '27px'],
      lg: ['23px', '27px'],
      xl: ['32px', '37px'],
      '2xl': ['40px', '44px'],
      '3xl': ['44px', '48px'],
      '4xl': ['48px', '52px'],
      '5xl': ['57px', '60px'],
      '6xl': ['63px', '67px'],
    },   
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xs: "1rem",
        sm: "2rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
}
