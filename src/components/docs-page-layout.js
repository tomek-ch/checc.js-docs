import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"

import Layout from "./layout"
import SideBar from "./side-bar"
import Seo from "./seo"
import { docsLayout } from "../styles/Docs.module.css"
import { docsArticle } from "../styles/Docs.module.css"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <Seo title={mdx.frontmatter.title} />
      <div className={docsLayout}>
        <SideBar />
        <div className={docsArticle}>
          <MDXProvider components={shortcodes}>
            <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
          </MDXProvider>
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
