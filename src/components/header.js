import PropTypes from 'prop-types'
import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import LogoGold from './images/logo-gold'
import './header.scss'
import BookButton from './book-button'

const Header = ({ siteTitle }) => (
    <header>
        <div className="logo-container pointer" onClick={() => scrollTo('.hero')}>
            <LogoGold />
        </div>
        <div className="navigator">
            <button className="nav-button pointer" onClick={() => scrollTo('#menu')}>
                Meny
            </button>
            <button className="nav-button pointer" onClick={() => scrollTo('.wine-tasting')}>
                Vinprovningar
            </button>
            <button className="nav-button pointer" onClick={() => scrollTo('.gallery')}>
                Galleri
            </button>
            <button className="nav-button pointer" onClick={() => scrollTo('#about')}>
                Om&nbsp;oss
            </button>
            <button className="nav-button pointer" onClick={() => scrollTo('footer')}>
                Kontakt
            </button>
        </div>
        <BookButton
            text="Boka&nbsp;bord"
            link="https://cloud.caspeco.se/public/webBooking?isWebBooking=true&system=se_breupp&unitId=13"
        />
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
