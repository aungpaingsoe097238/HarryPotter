/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#f1f5f9",
        black: "#334155",
        black50: "#64748b",
        dark: "#00000",
        yellow: "#fed52a",
        red: "#b7191c",
        gold: "#b29e31",
        primary: "#948959",
      },
    },
  },
  plugins: [],
};
