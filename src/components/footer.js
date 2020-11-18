import React from 'react'

const Footer = () => (
    <footer>
        <div class="container">
            <div class="row" id="footermargin">
                <div class="col-sm-3">
                    <h3>ÖPPETTIDER</h3>
                    <div>Måndag - Tisdag</div>
                    <div>16:30 - 22:00</div>
                    <div>Onsdag - Lördag</div>
                    <div>16:30 - 00:00</div>
                    <div>Söndag</div>
                    <div>16:30 - 22:00</div>
                </div>
                <div class="col-sm-3">
                    <h3 id="kontakt">KONTAKT</h3>
                    <p>
                        <a id="tele" href="tel:018 71 15 40">
                            <i class="fa fa-phone"></i>
                            018&nbsp-&nbsp71&nbsp15&nbsp40
                        </a>
                        <a href="mailto:kontakt@brezza.se">
                            <i class="fa fa-envelope-o"></i>
                            kontakt@brezza.se{' '}
                        </a>
                    </p>
                </div>
                <div class="col-sm-3">
                    <h3 id="hittahit">HITTA HIT</h3>
                    <p>Skolgatan&nbsp31 753&nbsp11 Uppsala</p>
                    <p>
                        <a
                            class="fa fa-map-marker"
                            rel="noreferrer"
                            href="https://www.google.se/maps/place/Brezza/@59.8607126,17.6289442,15z/data=!4m2!3m1!1s0x0:0xe870a29a3fb802c6?sa=X&ved=2ahUKEwi1tZH5u5TeAhVGqYsKHSvID9QQ_BIwCnoECAoQCw"
                        ></a>
                        <a
                            id="karta"
                            rel="noreferrer"
                            href="https://www.google.se/maps/place/Brezza/@59.8607126,17.6289442,15z/data=!4m2!3m1!1s0x0:0xe870a29a3fb802c6?sa=X&ved=2ahUKEwi1tZH5u5TeAhVGqYsKHSvID9QQ_BIwCnoECAoQCw"
                            target="_blank"
                        >
                            Karta
                        </a>
                    </p>
                </div>
                <div class="col-sm-3 footer-col-last">
                    <p>
                        <a
                            href="https://www.facebook.com/BrezzaUppsala"
                            rel="noreferrer"
                            target="_blank"
                            class="fa fa-facebook-square"
                        ></a>
                        <a
                            href="https://www.instagram.com/brezza.se"
                            rel="noreferrer"
                            target="_blank"
                            class="fa fa-instagram"
                            id="insta"
                        ></a>
                    </p>
                    <img class="AAA" src="./images/AAA.png" alt="Highest Credit Rating Bisnode" />
                </div>
            </div>
        </div>
        <img class="AAA-mobile" src="./images/AAA.png" alt="Highest Credit Rating Bisnode" />
    </footer>
)

export default Footer
