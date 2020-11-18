import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Hero from "../components/hero"
import Menu from "../components/Menu/menu"
import Divider from "../components/divider"
import WineTasting from "../components/wine-tasting"

const IndexPage = () => (
    <Layout>
        <SEO title="Brezza" />
        <Hero />
        <Menu />
        <Divider />
        <WineTasting />
        <Divider />
        <About />
        <Divider />
    </Layout>
)

export default IndexPage
