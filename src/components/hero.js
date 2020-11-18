import React from 'react'
import './hero.css'
import Logo from '../../svg/logo.svg'
import { Link } from 'gatsby'

const Hero = () => (
    <div className="hero">
        <Logo />
        <Link
            class="book-button"
            target="_blank"
            rel="noreferrer"
            to="https://cloud.caspeco.se/public/webBooking?isWebBooking=true&system=se_breupp&unitId=13"
        >
            Boka bord
        </Link>

        <Link
            class="book-button"
            target="_blank"
            to="https://cloud.caspeco.se/public/webBooking?system=se_breupp&unitId=14&onlineorder=true"
        >
            Avhämtning 20%
        </Link>
    </div>
)
export default Hero
