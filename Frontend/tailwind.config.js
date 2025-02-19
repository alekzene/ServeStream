module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightPurple: "#CBA3FF",  // lighter end of gradient
        darkPurple: "#700DCC",  // darker end of gradient
        white: "#FFFFFF",
        black: "#000000",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        sans: ['"Nunito Sans"', 'sans-serif'],
      },
      boxShadow: {
        custom: "0px 3px 2px 0px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
