import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import Post from "../components/post"

const IndexPage = () => {
  console.log(process.env.CONTENTFUL_SPACE_ID)
  return (
    <Layout>
      {/* <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
      <StaticQuery
        query={graphql`
          {
            allContentfulBlogPost {
              edges {
                node {
                  id
                  title
                }
              }
            }
          }
        `}
        render={({ allContentfulBlogPost: { edges } }) =>
          edges.map(({ node }) => <Post key={node.id} content={node} />)
        }
      />
    </Layout>
  )
}

export default IndexPage
