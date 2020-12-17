import React from 'react'
import './footer.scss'
import FooterSection from './footer-section'
import { FaPhone, FaEnvelope, FaMapMarker, FaFacebookSquare, FaInstagram } from 'react-icons/fa'

const Footer = () => (
    <footer>
        <div className="section row">
            <FooterSection header="ÖPPETTIDER">
                <>
                    <div className="weekdays">Måndag - Tisdag</div>
                    <div>16:30 - 22:00</div>
                    <br />
                    <div className="weekdays">Onsdag - Lördag</div>
                    <div>16:30 - 00:00</div>
                    <br />
                    <div className="weekdays">Söndag</div>
                    <div>16:30 - 22:00</div>
                </>
            </FooterSection>
            <FooterSection header="KONTAKT">
                <>
                    <a className="contact" href="tel:018 71 15 40">
                        <FaPhone className="icon" size="16" />
                        <span>018&nbsp;-&nbsp;71&nbsp;15&nbsp;40</span>
                    </a>
                    <a className="contact" href="mailto:kontakt@brezza.se">
                        <FaEnvelope className="icon" size="17" />
                        <span>kontakt@brezza.se</span>
                    </a>
                </>
            </FooterSection>
            <FooterSection header="HITTA HIT">
                <>
                    <p>
                        Skolgatan&nbsp;31
                        <br />
                        753&nbsp;11 Uppsala
                    </p>
                    <span>
                        <a
                            href="https://www.google.se/maps/place/Brezza/@59.8607126,17.6289442,15z/data=!4m2!3m1!1s0x0:0xe870a29a3fb802c6?sa=X&ved=2ahUKEwi1tZH5u5TeAhVGqYsKHSvID9QQ_BIwCnoECAoQCw"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaMapMarker color="red" size="16" /> Karta
                        </a>
                    </span>
                </>
            </FooterSection>
            <FooterSection>
                <div className="footer-col-last">
                    <a
                        className="fa-facebook-square"
                        href="https://www.facebook.com/BrezzaUppsala"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaFacebookSquare size="40" />
                    </a>
                    <a href="https://www.instagram.com/brezza.se" target="_blank" rel="noreferrer">
                        <FaInstagram size="40" />
                    </a>
                </div>
            </FooterSection>
        </div>
    </footer>
)

export default Footer
