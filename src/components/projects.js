import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Tags from "./tags"

const Projects = () => {

  const data = useStaticQuery(graphql`
    query {
      allGhostPost(filter: { featured: { eq: true } }, sort: {fields: published_at, order: DESC}) {
        edges {
          node {
            slug
            title
            custom_excerpt
            published_at(formatString: "MMM. DD, YYYY")
            tags {
              name
              slug
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
            <p>{ custom_excerpt }</p>
            <Tags data={tags} />
          </div>
        </div>
      </div>
    )

  })

  return (
    <div class="content readable">
      <div>
        <h3 class="pt-5 pb-4">Recent Highlights</h3>
      </div>
      <div>
        { postList }
        <div class="py-5">
          <a href={`/posts`}>
            <h5 class="has-text-primary pl-3">
              View All Posts &rarr;
            </h5>
          </a>
        </div>
      </div>
    </div>
  )

}

export default Projects
