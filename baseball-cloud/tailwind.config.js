const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  theme: {
    rotate: {
      "135": "135deg",
      ...defaultTheme.rotate,
    },
    extend: {
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
        oxygen: ["Oxygen"],
      },
    },
  },
  variants: {},
  plugins: [],
};
