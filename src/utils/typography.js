import Typography from "typography"

const typography = new Typography({
  title: "luciyer.me",
  baseFontSize: "20px",
  scaleRatio: 2.7,
  googleFonts: [
    {
      name: "Martel Sans",
      styles: [
        "300",
        "400",
        "500",
        "600",
        "700"
      ]
    }
  ],
  headerFontFamily: ["Martel Sans", "-apple-system", "sans-serif"],
  bodyFontFamily: ["Martel Sans", "sans-serif"],
})

if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
