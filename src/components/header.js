import * as React from "react"
import { Link } from "gatsby"

import { headerOuter, headerInner, nav } from "../styles/Header.module.css"

const Header = () => (
  <div className={headerOuter}>
    <header className={headerInner}>
      <Link to="/">
        <h1>✓Checc.js</h1>
      </Link>
      <nav className={nav}>
        <Link to="/docs">Docs</Link>
        <a href="https://github.com/tomek-ch/checc.js">GitHub</a>
      </nav>
    </header>
  </div>
)

export default Header
