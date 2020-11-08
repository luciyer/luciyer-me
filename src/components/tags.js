import React from "react"

const Tags = ({ data }) => {

  const tagList = data.map(({ slug, name }) => {

    return (
      <div class="is-inline-block">
        <a href={`/posts/tag/${slug}`}>
          <span class="tag is-primary is-light mr-2 mb-2">{ name }</span>
        </a>
      </div>
    )

  })

  return (<div>{tagList}</div>)

}

export default Tags
