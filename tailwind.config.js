import { keyframes } from "framer-motion";
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(3 7 18)',
      },
      fontFamily: {
        alice: ["Alice", "serif"],
        lora: ["Lora", "serif"],
        Sacramento: ["Sacramento", "serif"],
        Inter: ["Inter", "sans-serif"],
        Afacad: ["Afacad Flux", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in forwards',
        'loader': 'loader 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        loader: {
          '0%': { opacity: 0, transform: 'scale(0.9)' },   // ✅ string
          '50%': { opacity: 1, transform: 'scale(1.05)' },  // ✅ string
          '100%': { opacity: 1, transform: 'scale(1)' }     // ✅ string
        },
        
      },
    },
  },
  plugins: [],
});
