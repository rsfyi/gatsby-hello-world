import React from "react"

import Layout from "../components/Layout"
import { ExampleButton } from "../components/Button"

export default function Home() {
  return (
    <Layout>
      <h1>Hello from home page</h1>
      <ExampleButton>Click Me</ExampleButton>
    </Layout>
  )
}
