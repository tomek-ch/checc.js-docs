import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SideBar from "../components/side-bar"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <SideBar />
    <h1>Docs</h1>
  </Layout>
)

export default SecondPage
