const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const articlePost = path.resolve("./src/templates/article-post.js")
  const issuePost = path.resolve("./src/templates/issue-post.js")

  const result = await graphql(
    `
      {
        allStrapiArticle {
          nodes {
            title
            slug
          }
        }
        allStrapiIssue {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi articles`,
      result.errors
    )

    return
  }

  const articles = result.data.allStrapiArticle.nodes

  if (articles.length > 0) {
    articles.forEach((article) => {
      createPage({
        path: `/article/${article.slug}`,
        component: articlePost,
        context: {
          slug: article.slug,
        },
      })
    })
  }

  const issues = result.data.allStrapiIssue.nodes
  if (issues.length > 0) {
    issues.forEach((issue) => {
      createPage({
        path: `/issue/${issue.slug}`,
        component: issuePost,
        context: {
          slug: issue.slug,
        },
      })
    })
  }
}
