module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover', 'hover'],
      opacity: ['active', 'group-hover', 'hover'],
    },
  },
  plugins: [],
}
