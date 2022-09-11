import React from 'react'
import './banner.scss'
import amaronePdf from '../static-resources/Amarone_Vinprovning.pdf'

const Banner = () => {
    return (
        <button className="banner">
            <a className="wine-tasting-link" href={amaronePdf}>
                Vinprovning 29 september
            </a>
        </button>
    )
}

export default Banner
