import * as React from "react"
import { Link } from "gatsby"

import { ctaBtn } from "../styles/CtaBtn.module.css"
import { welcome } from "../styles/WelcomeSection.module.css"
import { features } from "../styles/Features.module.css"
import Layout from "../components/layout"
import { linksRow, linksHeading } from "../styles/LinksSection.module.css"
import illustration from "../images/illustration.svg"
import Seo from "../components/seo"

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
      <img src={illustration} alt="" loading="lazy" />
    </div>
    <div className={features}>
      <div>
        <h2>Declarative</h2>
        <p>
          Specify validation rules as schemas using objects. No more ifs and
          pushes.
        </p>
      </div>
      <div>
        <h2>Portable</h2>
        <p>
          Why write the same thing twice? Reuse validation schemas across your
          front-end and back-end.
        </p>
      </div>
      <div>
        <h2>Composable</h2>
        <p>
          Reuse basic schemas with the spread operator and add on to them. No
          magic, pure ES6.
        </p>
      </div>
      <div>
        <h2>Extensible</h2>
        <p>
          Embed your own validators and create smart error messages. No need to
          repeat yourself.
        </p>
      </div>
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
