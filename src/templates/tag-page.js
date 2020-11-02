import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostsByTag from "../components/posts_by_tag"

const TagPageTemplate = ({ data, pageContext, location }) => {

  const siteTitle = data.site.siteMetadata.title
  const { name } = pageContext

  const desc = `Posts tagged "${name}"`

  return (
    <Layout location={location} title={siteTitle} tag={name}>
      <SEO title={name} description={desc} />
      <PostsByTag postData={ data }/>
    </Layout>
  )

}

export default TagPageTemplate

export const pageQuery = graphql`
  query postsByTag($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allGhostPost(filter: { tags: { elemMatch: { slug: { eq: $slug } } } }) {
      edges {
        node {
          slug
          title
          published_at(formatString: "MMM. YYYY")
        }
      }
    }
  }
`
