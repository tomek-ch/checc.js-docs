import * as React from "react"

import Header from "./header"
import Footer from "./footer"
import { container } from "../styles/Layout.module.css"

const Layout = ({ children, toggleHamburger, isDocs }) => {
  return (
    <>
      <Header toggleHamburger={toggleHamburger} isDocs={isDocs} />
      <main className={container}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
