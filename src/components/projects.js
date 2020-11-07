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
      <div>
          <div>
            <a href={`/posts/${slug}`}>
              { title }
            </a>
          </div>
          <div>
            <span>{ published_at }</span>
          </div>
          <div>
            <p>{ custom_excerpt }</p>
          </div>
          <div>
            <Tags data={tags} />
          </div>
      </div>
    )

  })

  return (
    <div>
      <div>
        <h4>Recent Highlights</h4>
      </div>
      <div>
        { postList }
        <div>
          <a href={`/posts`}>View All Posts &rarr;</a>
        </div>
      </div>
    </div>
  )

}

export default Projects
