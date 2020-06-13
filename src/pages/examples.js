import React from "react"
import { graphql } from "gatsby"
import Header from "../examples/Header"
import StaticHeader from "../examples/HeaderStatic"
import Layout from "../components/Layout"

export const data = graphql`
  {
    site {
      info: siteMetadata {
        author
        data
        title
        description
        person {
          age
          name
        }
      }
    }
  }
`

const examples = props => {
  return (
    <Layout>
      <h1>Hello from examples page</h1>
      <Header />
      <StaticHeader />
      <p>PageQuery - Author : {props.data.site.info.author}</p>
    </Layout>
  )
}

export default examples
