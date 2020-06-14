import React from "react"

import { graphql, useStaticQuery } from "gatsby"

// importing image file directly
import img6 from "../images/image-6.jpeg"

// import Img components from gats to see optimization of images
import Img from "gatsby-image"

// fixed(width: 300, height: 400)
// (width: 200, grayscale: true)

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image-3.jpeg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image-6.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  return (
    <section className="images">
      <article className="single-image">
        <h3>basic images</h3>
        <img src={img6} width="100%" />
        <h2>content</h2>
      </article>
      <article className="single-image">
        <h3>fixed image/blur</h3>
        <Img fixed={data.fixed.childImageSharp.fixed} />
        <h2>content</h2>
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
        <Img fluid={data.fluid.childImageSharp.fluid} />
        <h2>content</h2>
      </article>
    </section>
  )
}

export default Images
