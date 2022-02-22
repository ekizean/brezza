import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import About from '../components/about'
import Hero from '../components/hero'
import Campaign from '../components/campaign'
import Menu from '../components/Menu/menu'
import Divider from '../components/divider'
import WineTasting from '../components/wine-tasting'
import Gallery from '../components/gallery'

const IndexPage = () => (
    <Layout>
        <SEO title="Brezza" />
        <Hero />
        <Campaign />
        <Menu />
        <Divider />
        <WineTasting />
        <Divider />
        <Gallery />
        <Divider />
        <About />
        <Divider />
    </Layout>
)

export default IndexPage
