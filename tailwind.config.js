/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#698087',
      'primary2': '#b55a2a',
      'primary3': '#faf2c5',
      'secondary': '#82786c',
      'secondary2': '#4d5e63',
      'background': '#362f27',
      'white': '#ffffff',
      'black': '#0000ff',
    },
    extend: {},
  },
  plugins: [],
}
