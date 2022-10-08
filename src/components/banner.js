import React from 'react'
import './banner.scss'
import image from '../static-resources/Vinprovning_25_oktober_2022.jpg'

const Banner = () => {
    return (
        <button className="banner">
            <a className="wine-tasting-link" href={image} target="_blank">
                Vinprovning 25 oktober kl 18:30
            </a>
        </button>
    )
}

export default Banner
