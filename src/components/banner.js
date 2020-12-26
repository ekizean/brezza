import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import './banner.scss'

const Banner = () => {
    return (
        <button className="banner" onClick={() => scrollTo('#menu')}>
            <span>Just nu 20% på all mat och dryck t.o.m. 15/1 (ej nyårsafton)</span>
        </button>
    )
}

export default Banner
