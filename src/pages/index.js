import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Menu from "../components/menu"

const IndexPage = () => (
  <Layout>
    <SEO title="Brezza" />
    <Menu />
    <About />
  </Layout>
)

export default IndexPage
