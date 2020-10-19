import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import styles from "./layout.module.css"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname !== rootPath) {
    header = (
      <h3
        style={{
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div className={styles.pageContainer}>
      <header>{header}</header>
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

export default Layout
