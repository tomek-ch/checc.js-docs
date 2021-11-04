import * as React from "react"
import { Link } from "gatsby"

import {
  headerOuter,
  headerInner,
  nav,
  hamburgerBtn,
} from "../styles/Header.module.css"
import Check from "./icons/check"

const Header = ({ toggleHamburger, isDocs }) => (
  <div className={headerOuter}>
    <header className={headerInner}>
      <Link to="/">
        <h1>
          <Check />
          Checc.js
        </h1>
      </Link>
      <nav className={nav}>
        <Link to="/docs/basics/">Docs</Link>
        <a href="https://github.com/tomek-ch/checc.js">GitHub</a>
        {isDocs && (
          <button onClick={toggleHamburger} className={hamburgerBtn}>
            ≡
          </button>
        )}
      </nav>
    </header>
  </div>
)

export default Header
