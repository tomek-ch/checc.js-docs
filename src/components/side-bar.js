import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

import { sideBar } from "../styles/SideBar.module.css"

const SideBar = () => {
  const { allMdx } = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___id, order: ASC }) {
        nodes {
          frontmatter {
            id
            title
          }
          fields {
            slug
          }
          id
          body
        }
      }
    }
  `)
  console.log(allMdx.nodes[0].id)
  console.log("aaa")
  return (
    <ul className={sideBar}>
      {allMdx.nodes.map(({ frontmatter, fields }) => (
        <li key={frontmatter.id}>
          <Link to={fields.slug}>{frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default SideBar
