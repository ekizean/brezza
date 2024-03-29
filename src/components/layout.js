/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'
import './layout.scss'
import './base.scss'
// import Banner from './banner'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div
                style={{
                    margin: `0 auto`,
                }}
            >
                <main>{children}</main>
            </div>
            <Footer />
            {/* <Banner /> */}
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
