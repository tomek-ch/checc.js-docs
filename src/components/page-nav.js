import { Link } from "gatsby"
import React from "react"

import { container, nextLink, linkLabel } from "../styles/PageNav.module.css"
import { inlineLink } from "../styles/InlineLink.module.css"

const PageNav = ({ prev, next }) => {
  return (
    <nav className={container}>
      {prev && (
        <Link to={prev.path}>
          <div className={linkLabel}>← Previous</div>
          <div className={inlineLink}>{prev.title}</div>
        </Link>
      )}
      {next && (
        <Link to={next.path} className={nextLink}>
          <div className={linkLabel}>Next →</div>
          <div className={inlineLink}>{next.title}</div>
        </Link>
      )}
    </nav>
  )
}

export default PageNav
