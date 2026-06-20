/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:      '#1d1d1f',
        'primary-mid':'#2c2c2e',
        'primary-card':'#3a3a3c',
        blue:         '#0066cc',
        'blue-light': '#147ce5',
        teal:         '#00c9a7',
        'teal-dim':   '#00a688',
        cream:        '#f5f5f7',
        'text-mid':   '#6e6e73',
      },
      fontFamily: {
        sans:    ['Inter','-apple-system','BlinkMacSystemFont','sans-serif'],
        display: ['Inter','-apple-system','BlinkMacSystemFont','sans-serif'],
      },
      animation: {
        'fade-in':    'fadeIn 0.8s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float':      'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0%':{opacity:0},'100%':{opacity:1} },
        float:  { '0%,100%':{transform:'translateY(0)'},'50%':{transform:'translateY(-8px)'} },
      },
      boxShadow: {
        'apple': '0 4px 24px rgba(0,0,0,0.12)',
        'apple-lg': '0 12px 48px rgba(0,0,0,0.18)',
        'glow-teal': '0 0 40px rgba(0,201,167,0.15)',
      },
    },
  },
  plugins: [],
};
