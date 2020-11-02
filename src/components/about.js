
import React from "react"
import styles from "./about.module.css"

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
    <div>

      <div className={styles.hello}>
        <h3>Hi there. I&apos;m Luc Iyer, a developer and tinkerer based in Buenos Aires.</h3>
      </div>
      <div>
        <p>
          {author.summary}
        </p>
        <p>
          Here in my adopted home of Argentina, I founded the non-profit <a href={`https://refugio.app`}>Refugio</a>, which develops management software for pet shelters.
        </p>
        <p>
          The projects I'd like to highlight are listed below, and a comprehensive list of posts can be found <Link to={`/posts`}>here</Link>.
        </p>
        <p>
          You can also find me on {` `}
          <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>{`, `}
          <a href={`https://linkedin.com/in/${social.linkedin}`}>LinkedIn</a>{`, `}
          <a href={`https://observablehq.com/${social.observable}`}>Observable</a>{`, and `}
          <a href={`https://github.com/${social.github}`}>Github</a>.
        </p>
      </div>

    </div>
  )
}

export default About
