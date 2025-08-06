const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(3 7 18)',
      },
      fontFamily:{
        alice:["Alice" , "serif"],
        lora:["Lora" , "serif"],
        Sacramento:["Sacramento" , "serif"],
        Inter:["Inter" , "sans-serif"],
        Afacad:["Afacad Flux" , "sans-serif"],
        // montserrat: ['Montserrat', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        Afacad: ['Afacad Flux', 'sans-serif'],
        
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}