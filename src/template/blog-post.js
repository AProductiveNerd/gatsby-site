import "katex/dist/katex.min.css"
import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo.js"
import { MDXRenderer } from "gatsby-plugin-mdx"

import "../components/index.css"

export default function Home({ data }) {
  const post = data.mdx
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />

      <article class="container-sm article">
        <h1 className="article-title">{post.frontmatter.title}</h1>
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
      body
      frontmatter {
        title
        tags
      }
    }
  }
`
