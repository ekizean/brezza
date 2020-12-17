import PropTypes from 'prop-types'
import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import LogoGold from './images/logo-gold'
import './header.scss'
import BookButton from './book-button'
import NavButtons from './nav-buttons'
import Burger from './burger'

const Header = ({ siteTitle }) => (
    <header>
        <button className="transparent-button" onClick={() => scrollTo('.hero')}>
            <LogoGold />
        </button>
        <div className="navigator desktop">
            <NavButtons />
        </div>
        <BookButton
            text="Boka&nbsp;bord"
            link="https://cloud.caspeco.se/public/webBooking?isWebBooking=true&system=se_breupp&unitId=13"
        />
        <div className="burger-wrapper mobile">
            <Burger />
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
