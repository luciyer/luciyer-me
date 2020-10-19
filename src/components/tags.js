import React from "react"
import styles from "./tags.module.css"

const Tags = ({ data }) => {

  const tagList = data.map(({ slug, name }) => {

    return (
      <div className={styles.display}>
        <a href={`/tags/${slug}`}>
          <span className={styles.badge}>{name}</span>
        </a>
      </div>
    )

  })

  return (<div>{tagList}</div>)

}

export default Tags
