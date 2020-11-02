const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {

  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  const result = await graphql(
    `{
      allGhostPost {
        nodes {
          slug
        }
      }
    }`
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allGhostPost.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {

      const previousPostSlug = index === 0 ? null : posts[index - 1].slug
      const nextPostSlug = index === posts.length - 1 ? null : posts[index + 1].slug

      createPage({
        path: `/posts/${post.slug}`,
        component: blogPost,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        }
      })

    })
  }

  const tagPage = path.resolve(`./src/templates/tag-page.js`)

  const tagQuery = await graphql(
    `{
      allGhostTag {
        nodes {
          name
          slug
        }
      }
    }`
  )

  if (tagQuery.errors) {
    reporter.panicOnBuild(
      `There was an error loading your tag posts`,
      tagQuery.errors
    )
    return
  }

  const tagList = tagQuery.data.allGhostTag.nodes

  if (tagList.length > 0) {
    tagList.forEach((tag, index) => {

      createPage({
        path: `/posts/tag/${tag.slug}`,
        component: tagPage,
        context: {
          slug: tag.slug,
          name: tag.name
        }
      })

    })
  }


}
