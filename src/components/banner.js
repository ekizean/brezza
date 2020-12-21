import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import './banner.scss'

const Banner = () => {
    return (
        <button className="banner" onClick={() => scrollTo('#menu')}>
            <span>Vi har just nu 20% på avhämtning av samtliga maträtter</span>
        </button>
    )
}

export default Banner
