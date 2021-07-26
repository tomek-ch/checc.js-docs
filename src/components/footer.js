import * as React from "react"

import { footerInner, footerOuter } from "../styles/Footer.module.css"
import { inlineLink } from "../styles/InlineLink.module.css"

const Footer = () => (
  <div className={footerOuter}>
    <footer className={footerInner}>
      © {new Date().getFullYear()}{" "}
      <a className={inlineLink} href="https://github.com/tomek-ch">
        Tomasz Chmielnicki
      </a>
    </footer>
  </div>
)

export default Footer
