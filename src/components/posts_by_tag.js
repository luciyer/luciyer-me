import React from "react"

import styles from "./posts.module.css"

const PostsByTag = ({ postData }) => {

  const posts = postData.allGhostPost.edges

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
