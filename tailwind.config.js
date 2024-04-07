/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        delftBlue: {
          100: "#CDD1FF",
          200: "#A4A8D9",
          300: "#7C81B0",
          400: "#565c88",
          500: "#313692",
        },
        bakerPink: {
          400: "#ff94b4",
          500: "#D36D8D",
          600: "#A94668",
          700: "#801F45",
          800: "580025",
        },
        react: "#61DBFB",
      },
      animation: {
        slowSpin: "spin 5s linear infinite",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
      dropShadow: {
        xl: "0 0 10px rgba(255, 255, 255, 0.9)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
};
