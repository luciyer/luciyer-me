import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            linkedin
            observable
            github
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata

  return (
    <div class="content readable">

        <div class="spacer is-hidden-mobile" style={{ paddingTop: "8vh" }} />

        <h1 class="title my-6-desktop py-4 has-text-weight-bold">
          Hi there! <div class="is-inline-desktop">I&apos;m Luc Iyer.</div>
        </h1>

        <div class="spacer is-hidden-mobile" style={{ paddingBottom: "4vh" }} />

        <p>
          {author.summary}
        </p>
        <p>
          The projects I'd like to highlight are listed below, or you can  <Link to={`/posts`}>see a comprehensive list of posts</Link>.
        </p>
        <p>
          You can also find me on {` `}
          <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>{` and `}
          <a href={`https://linkedin.com/in/${social.linkedin}`}>LinkedIn</a>{`, and more of my work on `}
          <a href={`https://observablehq.com/${social.observable}`}>Observable</a>{` and `}
          <a href={`https://github.com/${social.github}`}>Github</a>.
        </p>

        <div class="spacer is-hidden-mobile" style={{ paddingBottom: "4vh" }} />

    </div>
  )
}

export default About
