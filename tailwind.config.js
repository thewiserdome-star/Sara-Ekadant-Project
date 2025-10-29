/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy': {
          900: '#0a1628',
          800: '#0f1f3a',
          700: '#1a2942',
        },
        'gold': {
          500: '#d4af37',
          600: '#b8941f',
        },
        'orange': {
          500: '#ff6b35',
          600: '#e55a2b',
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
