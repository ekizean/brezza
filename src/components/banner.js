import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import './banner.scss'

const Banner = () => {
    return (
        <button className="banner" onClick={() => scrollTo('#wine-tasting')}>
            <span>JULKLAPPSTIPS! Presentkort på valfri vinprovning. Välkommen in!</span>
        </button>
    )
}

export default Banner
