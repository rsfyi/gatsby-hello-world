import React from "react"

import Layout from "../components/Layout"
import { ExampleButton } from "../components/Button"

export default function Home() {
  return (
    <Layout>
      <p>Hello from home page</p>
      <ExampleButton>Click Me</ExampleButton>
    </Layout>
  )
}
