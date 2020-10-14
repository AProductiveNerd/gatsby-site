import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo.js"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="💌 Sunday Times Sunday" />
      <section
        // style={{ paddingBottom: "0px", marginBottom: "-810px" }}
        className="container"
      >
        <h2>
          <i>'Sunday Times Sunday'</i> is my weekly newsletter in which I share
          cool stuff that I consumed in the week and some other bits
        </h2>
      </section>

      <hr />

      <section className="site-content container">
        {data.allMdx.edges.map(({ node }) => (
          <div key={node.id}>
            <div className="card content-card">
              <p
                style={{
                  textTransform: "camelCase",
                  color: "rgba(0, 161, 255, 1)",
                  fontSize: "13px",
                }}
              ></p>
              <a className="card-link" href={node.fields.slug}>
                <div className="card-body content-card-body">
                  <h5 className="card-title">{node.frontmatter.title}</h5>
                  <span className="text-muted">{node.frontmatter.date}</span>
                  <hr />
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
      filter: { frontmatter: { type: { ne: "article" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
          }
          id
        }
      }
    }
  }
`
