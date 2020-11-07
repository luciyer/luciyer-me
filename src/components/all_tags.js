import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
      <div>
        <a href={`/posts/tag/${slug}`}>
          <span>{name}</span>
        </a>
      </div>
    )

  })

  return (<div>{tagList}</div>)

}

export default AllTags
