import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import Img from "gatsby-image"

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      id
      title
      slug
      price
      info {
        info
      }
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

const ProductTemplate = ({ data }) => {
  const {
    product: {
      title,
      price,
      info: { info },
      image: { fixed },
    },
  } = data
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <Link to="/products">back to products link</Link>
        <h1>Single Product: {title}</h1>
        <section className="single-product">
          <article>
            <Img fixed={fixed} alt={title} />
          </article>
          <article>
            <h1>{title}</h1>
            <h3>${price}</h3>
            <p>{info}</p>
            <button>Add to cart</button>
          </article>
        </section>
      </div>
    </Layout>
  )
}

export default ProductTemplate
