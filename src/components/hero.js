import React from 'react'
import './hero.css'
import Logo from '../../svg/logo.svg'
import { Link } from 'gatsby'
import BookButton from './book-button'

const Hero = () => (
    <div className="hero">
        <Logo />
        <BookButton />
        <Link
            className="book-button"
            target="_blank"
            to="https://cloud.caspeco.se/public/webBooking?system=se_breupp&unitId=14&onlineorder=true"
        >
            Avhämtning 20%
        </Link>
    </div>
)
export default Hero
