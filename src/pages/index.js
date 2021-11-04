import * as React from "react"
import { Link } from "gatsby"

import { ctaBtn } from "../styles/CtaBtn.module.css"
import { welcome } from "../styles/WelcomeSection.module.css"
import { container } from "../styles/Layout.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Tiles from "../components/tiles"
import Links from "../components/links"

const IndexPage = () => (
  <Layout>
    <div className={container}>
      <Seo title="Welcome" />
      <div className={welcome}>
        <div>
          <h1>Reusable validation</h1>
          <p>For your front-end and back-end.</p>
          <Link to="/docs/basics/" className={ctaBtn}>
            Get started
          </Link>
        </div>
        <Tiles />
      </div>
    </div>
    <Links />
  </Layout>
)

export default IndexPage
