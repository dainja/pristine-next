const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      aurora: ["Aurora"],
    },
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        custom: "#f6f5f1",
        custom1: "#efece7",
        custom2: "#0a454d",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
