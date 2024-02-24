/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        vinertic: ["vineritc", "san-serif"],
        Homemade: ["Homemade Apple", "cursive"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
});
