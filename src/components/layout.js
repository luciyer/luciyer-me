import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, pageTitle, tag, children }) => {

  let header

  const isPost = (
    location.pathname.startsWith("/posts/") &&
    !location.pathname.startsWith("/posts/tag/")
  );

  const isPosts =  (
    location.pathname === "/posts" ||
    location.pathname === "/posts/"
  );

  const isTag = (
    location.pathname.startsWith("/posts/tag/")
  );

  if (isPosts) {
    header = (
      <section class="section pt-6 pb-5">
        <div class="container">
          <header class="readable">
            <nav class="breadcrumb is-medium has-text-weight-semibold has-arrow-separator" aria-label="breadcrumbs">
              <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li class="is-active"><a href="#" aria-current="page">Posts</a></li>
              </ul>
            </nav>
          </header>
        </div>
      </section>
    )
  } else if (isTag) {
    header = (
      <section class="section pt-6 pb-5">
        <div class="container">
          <header class="readable">
            <nav class="breadcrumb is-medium has-text-weight-semibold has-arrow-separator" aria-label="breadcrumbs">
              <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/posts`}>Posts</Link></li>
                <li class="is-active"><a href="#" aria-current="page">{ tag }</a></li>
              </ul>
            </nav>
          </header>
        </div>
      </section>
    )
  } else if (isPost) {
    header = (
      <section class="section pt-6 pb-5">
        <div class="container">
          <header class="readable">
            <nav class="breadcrumb is-medium has-text-weight-semibold has-arrow-separator" aria-label="breadcrumbs">
              <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/posts`}>Posts</Link></li>
                <li class="is-active"></li>
              </ul>
            </nav>
          </header>
        </div>
      </section>
    )
  } else {
    header = null;
  }

  return (
    <div class="container">
      { header }
      <section class="section pt-4">
        <div class="container">
          <div class="content">
            { children }
          </div>
        </div>
      </section>
      <footer />
    </div>
  )

}

export default Layout
