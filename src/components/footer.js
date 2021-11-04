import * as React from "react"

import { footer } from "../styles/Footer.module.css"
import { inlineLink } from "../styles/InlineLink.module.css"

const Footer = () => (
  <footer className={footer}>
    © {new Date().getFullYear()}{" "}
    <a className={inlineLink} href="https://github.com/tomek-ch">
      Tomasz Chmielnicki
    </a>
  </footer>
)

export default Footer
