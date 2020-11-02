import React from "react"

import styles from "./posts.module.css"
import Tags from "./tags"

const PostsByTag = ({ postData }) => {

  const posts = postData.allGhostPost.edges

  const postList = posts.map(({ node }) => {

    const {
      slug, title, published_at, tags
    } = node

    return (
      <div className={styles.postContainer}>
          <div className={styles.postTitle}>
            <a href={`/posts/${slug}`}>
              { title }
            </a>
          </div>
          <div className={styles.rightColumn}>
            <span className={styles.postDate}>{ published_at }</span>
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

export default PostsByTag
