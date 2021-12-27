import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import './banner.scss'

const Banner = () => {
    return (
        <button className="banner" onClick={() => scrollTo('#wine-tasting')}>
            <span>
                Presenttips! <span className="wine-tasting-link">Vinprovningar</span>
            </span>
        </button>
    )
}

export default Banner
