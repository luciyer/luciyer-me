import React from "react"
import { Link } from "gatsby"

import styles from "./layout.module.css"

const Layout = ({ location, title, pageTitle, tag, children }) => {

  let header

  if (location.pathname === "/posts" || location.pathname === "/posts/") {
    header = (
      <header className={styles.postHeader}>
        <div className={styles.pageTitle}>
          <Link to={`/`}>Home</Link> &rarr; { pageTitle }
        </div>
      </header>
    )
  } else if (location.pathname.startsWith("/posts/tag/")) {
    header = (
      <header className={styles.postHeader}>
        <div className={styles.pageTitle}>
          <Link to={`/`}>Home</Link> &rarr; <Link to={`/posts`}>Posts</Link> &rarr; { tag }
        </div>
      </header>
    )
  } else if (location.pathname.startsWith("/posts/") && !location.pathname.startsWith("/posts/tag/")) {
    header = (
      <header className={styles.postHeader}>
        <div className={styles.pageTitle}>
          <Link to={`/`}>Home</Link> &rarr; <Link to={`/posts`}>Posts</Link>
        </div>
      </header>
    )
  } else {
    header = (
      <header className={styles.homeHeader}></header>
    )
  }

  return (
    <div className={styles.pageContainer}>
      { header }
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

export default Layout
