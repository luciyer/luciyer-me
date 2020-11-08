require("dotenv").config()
const path = require("path")

module.exports = {
  siteMetadata: {
    title: `luciyer.me`,
    author: {
      name: `Luc Iyer`,
      summary: `I like to find novel ways to explore and visualize data to tell stories. These days, I am working with companies like Salesforce and Cisco to build analytics software.`,
    },
    description: `The personal website of Luc Iyer.`,
    siteUrl: `https://luciyer.me`,
    social: {
      twitter: `notluciyer`,
      linkedin: `luciyer`,
      observable: `@luciyer`,
      github: `luciyer`
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_TRACKING_ID
      },
    },
    `gatsby-plugin-sharp`,
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
         apiUrl: process.env.GHOST_CONTENT_API_URL,
         contentApiKey: process.env.GHOST_CONTENT_API_KEY,
         version: `v3`
       }
    },
    {
      resolve: `gatsby-transformer-rehype`,
      options: {
        filter: (node) => node.internal.type === `GhostPost`,
        plugins: [
          {
            resolve: `gatsby-rehype-prismjs`
          },
          {
            resolve: `gatsby-rehype-ghost-links`
          },
          {
            resolve: `gatsby-rehype-inline-images`,
            options: {
                maxWidth: 1440,
                withWebp: true,
                useImageCache: false
              }
          },
        ]
      }
    }
  ]
}
