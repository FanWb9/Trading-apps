/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
        'scroll-reverse': 'scrollReverse 30s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollReverse: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(50%)' },
        },
      },
    },
    screens: {
      sm: { min: "640px" },
      md: { min: "768px" },
      lg: { min: "1024px" },
    },
  },
  plugins: [],
};
