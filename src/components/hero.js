import React from 'react'
import './hero.css'
import Logo from '../../svg/logo.svg'
import BookButton from './book-button'

const Hero = () => (
    <div className="hero">
        <Logo />
        <BookButton
            text="Boka&nbsp;bord"
            link="https://cloud.caspeco.se/public/webBooking?isWebBooking=true&system=se_breupp&unitId=13"
        />
        <BookButton
            text="Avhämtning 20%"
            link="https://cloud.caspeco.se/public/webBooking?system=se_breupp&unitId=14&onlineorder=true"
        />
    </div>
)
export default Hero
