import Typography from "typography"

const typography = new Typography({
  title: "luciyer.me",
  baseFontSize: "20px",
  scaleRatio: 2.7,
  googleFonts: [
    {
      name: "Open Sans",
      styles: [
        "300",
        "400",
        "700"
      ]
    }
  ],
  headerFontFamily: ["Open Sans", "sans-serif"],
  bodyFontFamily: ["Open Sans", "sans-serif"],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
