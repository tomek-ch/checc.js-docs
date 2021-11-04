import React from "react"
import links from "../data/links.json"
import LinkBox from "../components/link-box"
import { linksContainer } from "../styles/LinksSection.module.css"

function Links() {
  return (
    <>
      <h2>Get started with Checc.js</h2>
      <div className={linksContainer}>
        {links.map(link => (
          <LinkBox key={link.title} {...link} />
        ))}
      </div>
    </>
  )
}

export default Links
