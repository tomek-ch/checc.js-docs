import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

import { sideBar, activeLink } from "../styles/SideBar.module.css"

const SideBar = ({ activePath }) => {
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

  return (
    <ul className={sideBar}>
      {allMdx.nodes.map(({ frontmatter, fields }) => (
        <li key={frontmatter.id}>
          <Link
            to={fields.slug}
            className={activePath === fields.slug ? activeLink : ""}
          >
            {frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SideBar
