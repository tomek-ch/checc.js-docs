import * as React from "react"
import { Link } from "gatsby"

import { ctaBtn } from "../styles/CtaBtn.module.css"
import { welcome } from "../styles/WelcomeSection.module.css"
import { features } from "../styles/Features.module.css"
import Layout from "../components/layout"
import { linksHeading } from "../styles/LinksSection.module.css"
import Seo from "../components/seo"
import tiles from "../data/tiles.json"
import links from "../data/links.json"
import Tile from "../components/tile"
import LinkBox from "../components/link-box"

const IndexPage = () => (
  <Layout>
    <Seo title="Welcome" />
    <div className={welcome}>
      <div>
        <h1>Reusable validation</h1>
        <p>For your front-end and back-end.</p>
        <Link to="/docs/basics/" className={ctaBtn}>
          Get started
        </Link>
      </div>
    </div>
    <div className={features}>
      {tiles.map(tile => (
        <Tile {...tile} />
      ))}
    </div>
    <h2 className={linksHeading}>Get started with Checc.js</h2>
    <div className={features}>
      {links.map(link => (
        <LinkBox key={link.title} {...link} />
      ))}
    </div>
  </Layout>
)

export default IndexPage
