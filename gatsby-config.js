require("dotenv").config()

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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-rehype`,
      options: {
        filter: (node) =>
            node.internal.type === `GhostPost` ||
            node.internal.type === `GhostPage`,
        plugins: [
          {
            resolve: `gatsby-rehype-prismjs`,
          },
        ],
      },
    }
  ]
}
