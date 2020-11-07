import React from "react"

const Tags = ({ data }) => {

  const tagList = data.map(({ slug, name }) => {

    return (
      <div>
        <a href={`/posts/tag/${slug}`}>
          <span class="tag is-primary is-light">{ name }</span>
        </a>
      </div>
    )

  })

  return (<div>{tagList}</div>)

}

export default Tags
