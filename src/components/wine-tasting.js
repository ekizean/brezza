import React from 'react'
import './wine-tasting.scss'
import WineTastingDistrict from './wine-tasting-district'
import WineTastingImage from './images/wine-tasting'
import BookButton from './book-button'

const WineTasting = () => (
    <div className="wine-tasting text-center section" id="wine-tasting">
        <h1>Vinprovningar</h1>
        <div className="row">
            <WineTastingDistrict
                name="-Valpolicella-"
                description="Valpolicella ligger i den italienska provinsen Verona i norra Italien och är
                        mest känt för sina kraftiga röda viner där Amarone, Ripasso och Recioto är
                        några av de mest kända sorterna."
            />
            <WineTastingDistrict
                name="-Piemonte-"
                description="Piemonte är en region i nordvästra Italien och är känt för Barolo – ”Kungen
                av italienska viner” samt ett flertal andra klassiska vinsorter såsom
                Barbaresco och Moscato D'Asti."
            />
            <WineTastingDistrict
                name="-Toscana-"
                description="Toscana är en välkänd vinregion för många svenskar. Chianti, Brunello di
                Montalcino och Vin Santo är några av Italiens mest respekterade vinsorter
                och alla görs i Toscana."
            />
        </div>
        <div className="row wine-tasting--main">
            <div className="col-sm-4">
                <WineTastingImage />
            </div>
            <div className="wine-tasting--offering">
                <div>
                    <div></div>
                    <div className="wine-tasting--description">
                        <div>
                            Vinprovning med fyra rätters middag med sex olika viner från området
                        </div>
                        <div className="wine-tasting--price">1495 kr/person</div>
                    </div>

                    <div className="wine-tasting--description">
                        <div>Vinprovning med tilltugg med sex olika viner från området</div>
                        <div className="wine-tasting--price">955 kr/person</div>
                    </div>

                    <div className="wine-tasting--description">
                        <div>
                            -LA DOLCE VITA-
                            <br />
                            Det bästa av det mesta från de tre vindistrikten ovan. Här får ni bl.a.
                            prova de konkurrerande toppvinerna Amarone, Barolo och Brunello
                            Vinprovning med sex rätters middag med nio olika viner
                        </div>
                        <div className="wine-tasting--price">2295 kr/person</div>
                    </div>

                    <div className="wine-tasting--description">
                        <div>
                            Priserna gäller för sällskap om minst 4 personer. Vi ser gärna att alla
                            personer i sällskapet väljer samma vindistrikt. Endast
                            förhandsbokningar.
                        </div>
                    </div>
                </div>

                <BookButton text="Boka&nbsp;vinprovning" link="mailto:kontakt@brezza.se" />
            </div>
        </div>
    </div>
)

export default WineTasting
