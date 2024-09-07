/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a192f',  // Dark blue background
        secondary: '#64ffda',  // Light green/teal accents for buttons and highlights
        tertiary: '#112240',  // Slightly lighter dark blue for section backgrounds
        light: '#ccd6f6',  // Light gray/blue for text
        dark: '#8892b0',  // Muted gray for secondary text
        accent: '#e6f1ff',  // Even lighter blue for subtle accents
      },
      fontFamily: {
        sans: ['Calibre', 'Inter', 'sans-serif'],  // You can replace this with the font used on the site
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      // smooth scrolling
      scrollBehavior: ['motion-safe', 'motion-reduce'],
    },
  }
}
