/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth:{
        container:`1440px`
      },
      screens:{
        xs:`320px`,
        sm:`375px`,
        sml:`500px`,
        md:`667px`,
        md1:`768px`,
        lg:`960px`, // Fixed typo in the value
        lg1:`1024px`,
        x1:`1280px`

      },
      fontFamily:{
        titleFont:"Roboto",
        bodyFont:"poppins",
      },
      colors:{
        amazon_blue:`#131921`,
        amazon_light:`#232F3E`,
        amazon_yellow:`#febd69`,
        white_text:`#ffffff`,
        lighttext:`#ccc`,
        quantity_box:`#fof2f2`,
        footerbottom:`#131A22`,
      },
      boxShadow:{
        testshadow:`0px 0px 32px 1px rgba(199,199,199,1)`,
        amazoninput:`0px 0px 3px 2px rgb(228 121 17 / 50%)`,

      },
    },
  },
  plugins: [],
}