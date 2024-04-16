import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["synthwave"]
  }
};
