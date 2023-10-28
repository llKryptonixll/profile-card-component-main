/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      screens: {
        'mobile': '375px',
      },
      fontFamily: {
        kumbh_sans: ["Kumbh Sans", "sans-serif"]
      },
      colors: {
        // primary
        dark_cyan: "hsl(185, 75%, 39%)",
        very_dark_desaturated: "hsl(229, 23%, 23%)",
        dark_grayish_blue: "hsl(227, 10%, 46%)",
        // neutral
        dark_gray: "hsl(0, 0%, 59%)"
      }
    },
  },
  plugins: [],
}

