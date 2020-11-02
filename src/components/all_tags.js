import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./tags.module.css"

const AllTags = () => {

  const data = useStaticQuery(graphql`
    query {
      allGhostTag(sort: {fields: name, order: ASC}) {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  `)

  const tagList = data.allGhostTag.edges.map(({ node }) => {

    const { slug, name } = node

    return (
      <div className={styles.display}>
        <a href={`/posts/tag/${slug}`}>
          <span className={styles.badge}>{name}</span>
        </a>
      </div>
    )

  })

  return (<div className={styles.tagContainer}>{tagList}</div>)

}

export default AllTags
