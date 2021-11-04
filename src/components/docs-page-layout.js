import React, { useState } from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"

import Layout from "./layout"
import SideBar from "./side-bar"
import Seo from "./seo"
import { docsLayout } from "../styles/Docs.module.css"
import { docsArticle } from "../styles/Docs.module.css"
import PageNav from "./page-nav"
import { container } from "../styles/Layout.module.css"

const shortcodes = { Link }

export default function PageTemplate({
  data: { mdx },
  location: { pathname },
  pageContext: { prev, next },
}) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const toggleHamburger = () => setIsHamburgerOpen(prev => !prev)

  return (
    <Layout toggleHamburger={toggleHamburger} isDocs>
      <div className={container}>
        <Seo title={mdx.frontmatter.title} />
        <div className={docsLayout}>
          <SideBar activePath={pathname} isHamburgerOpen={isHamburgerOpen} />
          <div className={docsArticle}>
            <MDXProvider components={shortcodes}>
              <MDXRenderer frontmatter={mdx.frontmatter}>
                {mdx.body}
              </MDXRenderer>
            </MDXProvider>
            <PageNav {...{ prev, next }} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query DocQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
