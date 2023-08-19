/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e85d04",
        secondary: "#ffba08",
        lightGray: "#f8f8ff",
        darkGray: "#33383e",
        darkBlack: "#070f22",
        black: "#030811",
        white: "#ffffff",
      },
    },
  },
  // plugins: [require("daisyui")],
};
