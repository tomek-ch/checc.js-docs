const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })

    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "docs" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `/docs${value}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___id }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMdx.edges

  const getNextOrPrev = idx => {
    const data = posts[idx].node
    return {
      title: data.frontmatter.title,
      path: data.fields.slug,
    }
  }

  posts.forEach(({ node }, idx) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/docs-page-layout.js`),
      context: {
        id: node.id,
        next: idx === posts.length - 1 ? null : getNextOrPrev(idx + 1),
        prev: idx === 0 ? null : getNextOrPrev(idx - 1),
      },
    })
  })
}
