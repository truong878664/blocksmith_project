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
        "gradient-circle-pink":
          "radial-gradient(circle, rgba(243,39,94,.8) 0%, rgba(243,39,94,0) 70%);",
        "gradient-circle-purple":
          "radial-gradient(circle, rgba(124,69,212,.5) 0%, rgba(243,39,94,0) 70%);",
      },
      gridTemplateAreas: {
        'roadmap': [
          "Products Products Products Brand Brand",
          "Expansion Expansion Community Community Community",
          "ourCommunity ourCommunity ourCommunity ourCommunity ourCommunity",
        ],
        'price': [
          "price price price change change",
          "valuation valuation valuation volume volume",
        ],
      },
      height: {
        '100': '25rem',
      }
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
};
