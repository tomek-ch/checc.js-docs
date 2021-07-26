import * as React from "react"

import Header from "./header"
import Footer from "./footer"
import { container } from "../styles/Layout.module.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={container}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
