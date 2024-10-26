const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        lavender: "#EBC5EE",
        pinker: "#D268CC",
        rose: "#E08CD9",
        rosy: "#E396DB",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
