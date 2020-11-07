import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Posts = () => {

  const data = useStaticQuery(graphql`
    query {
      allGhostPost(sort: {fields: published_at, order: DESC}) {
        edges {
          node {
            slug
            title
            published_at(formatString: "MMM. DD, YYYY")
          }
        }
      }
    }
  `)

  const posts = data.allGhostPost.edges

  const postList = posts.map(({ node }) => {

    const {
      slug, title, published_at
    } = node

    return (
      <div>
          <div>
            <a href={`/posts/${slug}`}>
              { title }
            </a>
          </div>
          <div>
            <span>{published_at}</span>
          </div>
      </div>
    )

  })

  return (
    <div>
      { postList }
    </div>
  )

}

export default Posts
