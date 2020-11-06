import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import styles from "./posts.module.css"
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
      <div className={styles.postContainer}>
          <div className={styles.postTitle}>
            <a href={`/posts/${slug}`}>
              { title }
            </a>
          </div>
          <div className={styles.rightColumn}>
            <span className={styles.postDate}>{ published_at }</span>
          </div>
          <div className={styles.postDetails}>
            <p>{ custom_excerpt }</p>
          </div>
          <div className={styles.postDetails}>
            <Tags data={tags} />
          </div>
      </div>
    )

  })

  return (
    <div className={styles.projectsContainer}>
      <div className={styles.titleContainer}>
        <h4>Recent Highlights</h4>
      </div>
      <div>
        { postList }
        <div className={styles.viewAll}>
          <a href={`/posts`}>View All Posts &rarr;</a>
        </div>
      </div>
    </div>
  )

}

export default Projects
