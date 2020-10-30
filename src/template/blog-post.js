import "katex/dist/katex.min.css"
import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo.js"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "../components/index.css"

export default function Home({ data }) {
  const post = data.mdx
  const tagArray = data.mdx.frontmatter.tags
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <article class="container-sm article">
        <h1 className="article-title">{post.frontmatter.title}</h1>
        <p
          style={{
            textTransform: "camelCase",
            color: "rgba(0, 161, 255, 1)",
            fontSize: "13px",
          }}
        >
          {tagArray.map(tagItem => (
            <Link
              style={{ paddingRight: "8px", color: "rgba(0, 161, 255, 0.8)" }}
              to={`/tags/${tagItem}`}
            >
              {tagItem}
            </Link>
          ))}
          <br />
          <span style={{ color: "rgba(0, 0, 0, 0.8)" }}>
            {post.timeToRead} mins
          </span>
        </p>
        <hr /> <br />
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        url
        twitterHandle
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      timeToRead
      body
      frontmatter {
        title
        tags
      }
    }
  }
`
