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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
