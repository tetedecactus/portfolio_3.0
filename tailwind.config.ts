/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      color: {
        customBeige: "#F2FBFF",
        customBrown: "#664C31",
        customVert: "#2f9459",
        customBlack: "#0C0B0D",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
