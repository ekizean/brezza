import React from 'react'
import './hero.scss'
import Logo from '../../svg/logo.svg'
// import BookButton from './book-button'
// import scrollTo from 'gatsby-plugin-smoothscroll'

const Hero = () => (
    <div className="hero">
        <Logo />
        {/* <BookButton
            text="Boka&nbsp;bord"
            link="https://cloud.caspeco.se/public/webBooking?isWebBooking=true&system=se_breupp&unitId=13"
        />
        <BookButton
            text="Avhämtning 10%"
            link="https://cloud.caspeco.se/public/webBooking?system=se_breupp&unitId=14&onlineorder=true"
        />
        <button className="book-button" onClick={() => scrollTo('.wine-tasting')}>
            <span>VINPROVNINGAR</span>
        </button> */}
        <div className="october-text">
            <p className="ad first">Brezza fyller 5 år 🎉</p>
            <br />
            <p className="ad second">
                Det firas under hela oktober med 20% på AW vardagar 16 - 17, vinprovningar onsdagar
                och torsdagar samt hela notan på söndagar
            </p>
        </div>
    </div>
)
export default Hero
