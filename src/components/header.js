import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import './header.scss'

const Header = ({ siteTitle }) => (
    <header>
        <button className="nav-button" onClick={() => scrollTo('#menu')}>
            Meny
        </button>
        <button className="nav-button" onClick={() => scrollTo('#wine-tasting')}>
            Vinprovningar
        </button>
        <button className="nav-button" onClick={() => scrollTo('#about')}>
            Galleri
        </button>
        <button className="nav-button" onClick={() => scrollTo('#about')}>
            Om oss
        </button>
        <button className="nav-button" onClick={() => scrollTo('footer')}>
            Kontakt
        </button>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
