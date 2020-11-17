import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Hero from "../components/hero"
import Menu from "../components/Menu/menu"

const IndexPage = () => (
  <Layout>
    <SEO title="Brezza" />
    <Hero />
    <Menu />
    <About />
  </Layout>
)

export default IndexPage
