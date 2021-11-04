import * as React from "react"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, toggleHamburger, isDocs }) => {
  return (
    <>
      <Header toggleHamburger={toggleHamburger} isDocs={isDocs} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
