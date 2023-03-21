/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#f1f5f9",
        black: "#334155",
        black50: "#64748b",
        dark: "#0f172a",
        yellow: "#fed52a",
        red: "#b7191c",
        gold: "#bf9532",
        primary: "#948959",
      },
    },
  },
  plugins: [],
};
