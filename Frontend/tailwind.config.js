/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mbg-blue": "#075CF8",
        "mbg-green": "#00821A",
        "mbg-red": "#B70D0D",
        "mbg-gold": "#A57A02",
        "mbg-black": "#000000",
        "mbg-white": "#FFFFFF",
        "mbg-white-details": "#F7F7F7",
        "mbg-white-details-green": "#86CF9E",
        "mbg-white-details-red": "#EC8989",
        "mbg-white-details-gold": "#E4DC88",
        "mbg-lightgrey": "#BFBFBF",
        "mbg-darkgrey": "#404040",
        "mbg-youtube": "#9E1C1C",
        "mbg-instagram1": "#7F2E8F",
        "mbg-instagram2": "#C0B01E",
        "mbg-rgbadark": "rgba(0, 0, 0, 0.308)",
        "mbg-rgbalight": "rgba(0, 0, 0, 0.06)",
      }
    },
  },
  plugins: [],
}