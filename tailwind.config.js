/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-dark': 'linear-gradient(180deg, rgba(67,53,85,1) 0%, rgba(49,45,54,1) 52%, rgba(41,41,41,1) 100%)',
      },
    },
  },
  plugins: [],
}