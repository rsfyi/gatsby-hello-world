import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import styles from "../components/products.module.css"
export const data = graphql`
  {
    allContentfulProduct {
      totalCount
      nodes {
        id
        title
        price
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const products = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data
  return (
    <Layout>
      <section className={styles.page}>
        {products.map(product => (
          <article key={product.id}>
            <Img fluid={product.image.fluid} alt={product.title} />
            <h3>
              {product.title} <span>${product.price}</span>
            </h3>
            <Link to={`/products/${product.slug}`}>more details</Link>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export default products
