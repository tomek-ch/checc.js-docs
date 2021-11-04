import * as React from "react"
import { Link } from "gatsby"

import { ctaBtn } from "../styles/CtaBtn.module.css"
import { welcome } from "../styles/WelcomeSection.module.css"
import { features } from "../styles/Features.module.css"
import Layout from "../components/layout"
import { linksRow, linksHeading } from "../styles/LinksSection.module.css"
import Seo from "../components/seo"
import tiles from "../data/tiles.json"
import Tile from "../components/tile"

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
      <div>
        <h3>Front-end or back-end?</h3>
        <div className={linksRow}>
          <a
            href="https://github.com/tomek-ch/checc-example-react"
            className={ctaBtn}
          >
            React example
          </a>
          <a
            href="https://github.com/tomek-ch/checc-example-express"
            className={ctaBtn}
          >
            Express example
          </a>
        </div>
      </div>
      <div>
        <h3>See the referece</h3>
        <div className={linksRow}>
          <Link to="/docs/basics/" className={ctaBtn}>
            Go to docs
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
