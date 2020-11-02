import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import styles from "./posts.module.css"
import Tags from "./tags"

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
      <div className={styles.postContainer}>
          <div className={styles.postTitle}>
            <a href={`/posts/${slug}`}>
              { title }
            </a>
          </div>
          <div className={styles.rightColumn}>
            <span className={styles.postDate}>{published_at}</span>
          </div>
      </div>
    )

  })

  return (
    <div className={styles.postsContainer}>
      { postList }
    </div>
  )

}

export default Posts
