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
              <div className="card-body content-card-body">
                <a className="card-link" href={node.fields.slug}>
                  <p
                    style={{
                      textTransform: "camelCase",
                      color: "rgba(0, 161, 255, 1)",
                      fontSize: "13px",
                    }}
                  >
                    {node.frontmatter.tags.map(tagItem => (
                      <Link
                        style={{ paddingRight: "5px" }}
                        to={`/tags/${tagItem}`}
                      >
                        {tagItem}
                      </Link>
                    ))}
                  </p>
                  <h4 className="card-title">{node.frontmatter.title}</h4>
                  <span className="text-muted">{node.frontmatter.date}</span>
                  <hr />
                  <p className="card-text text-muted">
                    {node.frontmatter.excerpt}
                  </p>
                </a>
              </div>
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
      filter: { frontmatter: { type: { eq: "article" } } }
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
