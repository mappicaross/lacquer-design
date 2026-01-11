/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'lacquer-blue': '#29519B',
        'lacquer-red': '#B6463C',
        'lacquer-bg': '#EBF1F3',
      },
      fontFamily: {
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
