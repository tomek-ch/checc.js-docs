import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

const SideBar = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          name
        }
      }
    }
  `)
  return (
    <ul>
      {data.allFile.nodes.map(node => (
        <li key={node.name}>{node.name}</li>
      ))}
    </ul>
  )
}

export default SideBar
