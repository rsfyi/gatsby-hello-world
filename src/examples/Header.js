import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const getData = graphql`
  {
    site {
      info: siteMetadata {
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }
`

const Header = () => {
  const {
    site: {
      info: {
        person: { name, age },
      },
    },
  } = useStaticQuery(getData)

  return (
    <>
      <h1>{name}</h1>
      <h1>{age}</h1>
    </>
  )
}

export default Header
