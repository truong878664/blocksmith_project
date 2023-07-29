/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-pink": "#f3275e",
      },
      fontFamily: {
        "lilita-one": ["Lilita One", "cursive"],
      },
      backgroundImage: {
        "gradient-circle":
          "radial-gradient(circle, rgba(243,39,94,.8) 0%, rgba(243,39,94,0) 70%);",
      },
    },
  },
  plugins: [],
};
