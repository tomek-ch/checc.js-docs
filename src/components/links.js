import React from "react"
import links from "../data/links.json"
import LinkBox from "../components/link-box"
import { linksContainer, linksSection } from "../styles/LinksSection.module.css"
import { container } from "../styles/Layout.module.css"

import ReactLogo from "./icons/react"
import ExpressLogo from "./icons/express"
import Check from "./icons/check"

const icons = { ReactLogo, ExpressLogo, Check }

function Links() {
  return (
    <div className={linksSection}>
      <div className={container}>
        <h2>Get started with Checc.js</h2>
        <div className={linksContainer}>
          {links.map(link => (
            <LinkBox key={link.title} {...link} Icon={icons[link.icon]} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Links
