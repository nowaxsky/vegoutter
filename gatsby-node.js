const path = require(`path`)
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `posts` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const mainTemplate = path.resolve(`./src/pages/index.tsx`)
  const blogPostTemplate = path.resolve(`./src/templates/blogPost.tsx`)
  const softwareTemplate = path.resolve(`./src/pages/software.tsx`)
  const musicTemplate = path.resolve(`./src/pages/music.tsx`)

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(posts/blog)/" } }
        sort: { fields: frontmatter___date, order: DESC }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      categoriesGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___category) {
          fieldValue
          totalCount
        }
      }
      softwareTagsGroup: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(posts/blog/software)/" } }
        limit: 2000
      ) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
      musicTagsGroup: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(posts/blog/music)/" } }
        limit: 2000
      ) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  const posts = result.data.postsRemark.edges

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })

  const categories = result.data.categoriesGroup.group

  categories.forEach(category => {
    createPage({
      path: `/category/${_.kebabCase(category.fieldValue)}/`,
      component: mainTemplate,
      context: {
        category: category.fieldValue,
      },
    })
  })

  const softwareTags = result.data.softwareTagsGroup.group

  softwareTags.forEach(tag => {
    createPage({
      path: `/software/tag/${_.kebabCase(tag.fieldValue)}/`,
      component: softwareTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })

  const musicTags = result.data.musicTagsGroup.group

  musicTags.forEach(tag => {
    createPage({
      path: `/music/tag/${_.kebabCase(tag.fieldValue)}/`,
      component: musicTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
