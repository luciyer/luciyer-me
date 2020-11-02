import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tags from "../components/tags"

const PostTemplate = ({ data, pageContext, location }) => {

  const post = data.ghostPost
  const siteTitle = data.site.siteMetadata.title
  //const { previous, next } = pageContext


  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={ post.meta_title }
        description={ post.meta_description || post.custom_excerpt }
      />
      <div class="postContainer">
        <section class="postPageTitle">
          <h2>{ post.title }</h2>
        </section>
        <section class="postPageTags">
          <Tags data={ post.tags }/>
        </section>
        <section dangerouslySetInnerHTML={{ __html: post.childHtmlRehype.html }} />
      </div>
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query singlePostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    ghostPost(slug: {eq: $slug}) {
      slug
      title
      childHtmlRehype {
        html
      }
      published_at(formatString: "MMM. DD, YYYY")
      tags {
        name
        slug
      }
      meta_description
      meta_title
    }
  }
`
