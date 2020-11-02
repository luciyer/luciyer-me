import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Posts from "../components/posts"
import AllTags from "../components/all_tags"

const PostIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle} pageTitle="Posts">
      <SEO title="Posts" />
      <AllTags />
      <Posts />
    </Layout>
  )
}

export default PostIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
