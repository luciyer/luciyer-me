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
      <div class="is-inline-block">
        <a href={`/posts/tag/${slug}`}>
          <span class="tag is-primary is-light mr-2 mb-2">{ name }</span>
        </a>
      </div>
    )

  })

  return (
    <div class="content readable pb-5">
      {tagList}
    </div>
  )

}

export default AllTags
