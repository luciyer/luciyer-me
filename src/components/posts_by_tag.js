import React from "react"

const PostsByTag = ({ postData }) => {

  const posts = postData.allGhostPost.edges

  const postList = posts.map(({ node }) => {

    const {
      slug, title, published_at
    } = node

    return (
      <div>
          <div>
            <a href={`/posts/${slug}`}>
              { title }
            </a>
          </div>
          <div>
            <span>{ published_at }</span>
          </div>
      </div>
    )

  })

  return (
    <div>
      { postList }
    </div>
  )

}

export default PostsByTag
