import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const Footer = () => {

  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          social {
            twitter
            observable
            github
          }
        }
      }
    }
  `)

  const { social } = data.site.siteMetadata

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <p>
        Find me on {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          Twitter
        </a>
        {`, `}
        <a href={`https://observablehq.com/${social.observable}`}>
          Observable
        </a>{`, or `}
        <a href={`https://github.com/${social.github}`}>
          Github
        </a>{`.`}
      </p>
    </div>
  )
}

export default Footer
