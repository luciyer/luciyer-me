import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import styles from "./projects.module.css"
import Tags from "./tags"

const Projects = () => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulPost(filter: {isFeatured: {eq: true}}, sort: {fields: publishedDate, order: DESC}) {
        edges {
          node {
            slug
            title
            description {
              description
            }
            repositoryUrl
            publishedDate(formatString: "MMMM YYYY")
            tags {
              name
              slug
            }
          }
        }
      }
    }
  `)

  const posts = data.allContentfulPost.edges

  const postList = posts.map(({ node }) => {

    const {
      slug, title, description,
      repositoryUrl, publishedDate, tags
    } = node

    return (
      <div className={styles.projectContainer}>
          <div className={styles.projectTitle}>
            <a href={`${slug}`}><h4>{title}</h4></a>
            <span className={styles.postDate}>{publishedDate}</span>
          </div>
          <div>
            <div className={styles.descriptionContainer}>
              <p>{description.description}</p>
            </div>
            <div>
              <Tags data={tags}/>
            </div>
          </div>
      </div>
    )

  })

  return (
    <div className={styles.projectsContainer}>
      <div className={styles.titleContainer}>
        <h3>Recent Highlights</h3>
      </div>
      <div>
        {postList}
      </div>
    </div>
  )

}

export default Projects
