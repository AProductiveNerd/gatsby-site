import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo.js"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="🏠 Home" />

      <section className="site-content container">
        {data.allMdx.edges.map(({ node }) => (
          <div key={node.id}>
            <div className="card content-card">
              <p
                style={{
                  textTransform: "uppercase",
                  color: "rgba(0, 161, 255, 1)",
                  fontSize: "13px",
                }}
              >
                <Link to={`/tags/${node.frontmatter.tags}`}>
                  {node.frontmatter.tags}
                </Link>
              </p>
              <a className="card-link" href={node.fields.slug}>
                <div className="card-body content-card-body">
                  <h5 className="card-title">{node.frontmatter.title}</h5>
                  <span className="text-muted">{node.frontmatter.date}</span>
                  <p className="card-text text-muted">
                    {node.frontmatter.excerpt}
                  </p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile {
      edges {
        node {
          id
          base
          accessTime(fromNow: true)
        }
      }
    }
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { ne: "newsletter" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
            excerpt
          }
          id
        }
      }
    }
  }
`
