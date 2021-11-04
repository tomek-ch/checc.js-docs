import React from "react"
import links from "../data/links.json"
import LinkBox from "../components/link-box"
import { linksContainer } from "../styles/LinksSection.module.css"

import ReactLogo from "./icons/react"
import ExpressLogo from "./icons/express"
import Check from "./icons/check"

const icons = { ReactLogo, ExpressLogo, Check }

function Links() {
  return (
    <>
      <h2>Get started with Checc.js</h2>
      <div className={linksContainer}>
        {links.map(link => (
          <LinkBox key={link.title} {...link} Icon={icons[link.icon]} />
        ))}
      </div>
    </>
  )
}

export default Links
