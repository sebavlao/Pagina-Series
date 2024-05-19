/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit-100': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      fontFamily: {
        primary: ["Bebas Neue", "sans-serif"],
        secondary: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
}

