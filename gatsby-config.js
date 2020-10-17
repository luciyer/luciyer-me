require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `luciyer.me`,
    author: {
      name: `Luc Iyer`,
      summary: ``,
    },
    description: `The personal website of Luc Iyer.`,
    siteUrl: `https://luciyer.me`,
    social: {
      twitter: `notluciyer`,
      observable: `@luciyer`,
      github: `luciyer`
    },
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
       resolve: `gatsby-source-ghost`,
       options: {
           apiUrl: process.env.GHOST_IP,
           contentApiKey: process.env.GHOST_API_KEY
       }
    }
  ],
}
