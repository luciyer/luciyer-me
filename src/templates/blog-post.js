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
        title={ post.title }
        description={ post.meta_description || post.custom_excerpt }
      />
      <div class="content postBody">

        <div class="postTitleAndTags has-text-centered has-text-left-mobile pb-5">
          <h2 class="pb-3">{ post.title }</h2>
          <div class="postTags pb-5 has-text-center">
            <Tags data={ post.tags }/>
          </div>
        </div>

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
