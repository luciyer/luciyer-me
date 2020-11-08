import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Tags from "./tags"

const Posts = () => {

  const data = useStaticQuery(graphql`
    query {
      allGhostPost(sort: {fields: published_at, order: DESC}) {
        edges {
          node {
            slug
            title
            custom_excerpt
            published_at(formatString: "MMM. DD, YYYY")
            tags {
              slug
              name
            }
          }
        }
      }
    }
  `)

  const posts = data.allGhostPost.edges

  const postList = posts.map(({ node }) => {

    const {
      slug, title, custom_excerpt, published_at, tags
    } = node

    return (
      <div class="card my-6-desktop my-5">
        <header class="card-header">
          <a href={`/posts/${slug}`}>
            <h5 class="card-header-title mb-0 mt-1 has-text-primary">
              { title }
            </h5>
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            <time class="is-block pb-3 has-text-grey is-size-7" datetime={published_at}>{ published_at }</time>
            <p class="">{ custom_excerpt }</p>
            <Tags data={tags} />
          </div>
        </div>
      </div>
    )

  })

  return (
    <div class="content readable">
      { postList }
    </div>
  )

}

export default Posts
