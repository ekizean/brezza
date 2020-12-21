import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import './banner.scss'

const Banner = () => {
    return (
        <div className="banner" onClick={() => scrollTo('#menu')}>
            <span>Vi har just nu 20% på avhämtning av samtliga maträtter</span>
        </div>
    )
}

export default Banner
