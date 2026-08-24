/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        mist: "#EAF2F8", //ICE BLUE
        linen: "#F2EFE7", //BEIGE
        stone: "#98B4C7", //AIRY BLUE
        slate: "#3D5A80", //STEEL BLUE
        steel: "#3D5A80", //STEEL BLUE
        navy: "#1B263B",//NAVY
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
