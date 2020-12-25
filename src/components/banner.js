import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import './banner.scss'

const Banner = () => {
    return (
        <button className="banner" onClick={() => scrollTo('#menu')}>
            <span>Vi har 20% på hela menyn t.o.m. 15 januari</span>
        </button>
    )
}

export default Banner
