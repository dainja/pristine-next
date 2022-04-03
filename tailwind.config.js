const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "src/og-image/Page.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      aurora: ["Aurora", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        custom: "#f6f5f1",
        custom1: "#efece7",
        tarawera: {
          DEFAULT: "#0A454D",
          50: "#2BCDE3",
          100: "#1DC6DD",
          200: "#18A6B9",
          300: "#138695",
          400: "#0F6571",
          500: "#0A454D",
          600: "#04191B",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
