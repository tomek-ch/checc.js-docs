import * as React from "react"
import { Link } from "gatsby"

import { ctaBtn } from "../styles/CtaBtn.module.css"
import { welcome } from "../styles/WelcomeSection.module.css"
import { features } from "../styles/Features.module.css"
import { inlineLink } from "../styles/InlineLink.module.css"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div className={welcome}>
      <h1>Reusable validation</h1>
      <p>For your front-end and back-end.</p>
      <Link to="/docs" className={ctaBtn}>
        Get started
      </Link>
    </div>
    <div className={features}>
      <div>
        <h3>Declarative</h3>
        <p>
          Specify validation rules as schemas using simple JavaScript objects.
          No more ifs and pushes.
        </p>
      </div>
      <div>
        <h3>Portable</h3>
        <p>
          Why write the same thing twice? Reuse validation schemas across your
          front-end and back-end.
        </p>
      </div>
      <div>
        <h3>Composable</h3>
        <p>
          Reuse basic schemas with the spread operator and add on to them. No
          magic, pure ES6.
        </p>
      </div>
      <div>
        <h3>Extensible</h3>
        <p>
          Embed your own validators and create smart error messages. No need to
          repeat yourself.
        </p>
      </div>
    </div>
    <div>
      <p>Front-end or back-end?</p>
      <Link
        to="https://github.com/tomek-ch/checc-example-react"
        className={inlineLink}
      >
        React example
      </Link>
      <Link
        to="https://github.com/tomek-ch/checc-example-express"
        className={inlineLink}
      >
        Express example
      </Link>
    </div>
    <div>
      <p>See the referece</p>
      <Link
        to="https://github.com/tomek-ch/checc-example-express"
        className={inlineLink}
      >
        Get started
      </Link>
    </div>
  </Layout>
)

export default IndexPage
