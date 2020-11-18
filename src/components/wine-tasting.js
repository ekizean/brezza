import React from 'react'
import './wine-tasting.css'

const WineTasting = () => (
    <div className="wine-tasting">
        <div className="container">
            <h1>Vinprovningar</h1>
            <div className="row">
                <div className="col-sm-4">
                    <div className="wine-tasting--district">
                        <h2>-Valpolicella- </h2>
                        <div className="silver">
                            Valpolicella ligger i den italienska provinsen Verona i norra Italien
                            och är mest känt för sina kraftiga röda viner där Amarone, Ripasso och
                            Recioto är några av de mest kända sorterna.
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="wine-tasting--district">
                        <h2>-Piemonte-</h2>
                        <div className="silver">
                            Piemonte är en region i nordvästra Italien och är känt för Barolo –
                            ”Kungen av italienska viner” samt ett flertal andra klassiska vinsorter
                            såsom Barbaresco och Moscato D'Asti{' '}
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="wine-tasting--district">
                        <h2>-Toscana-</h2>
                        <div className="silver">
                            Toscana är en välkänd vinregion för många svenskar. Chianti, Brunello di
                            Montalcino och Vin Santo är några av Italiens mest respekterade
                            vinsorter och alla görs i Toscana.
                        </div>
                    </div>
                </div>
            </div>
            <div className="row wine-tasting--main">
                <div className="col-sm-4">
                    {/* <img className="galleribild" src="./images/vinprovning.jpeg" alt="vinprovning"> */}
                </div>
                <div>
                    <div className="wine-tasting--description">
                        <div className="silver">
                            Vinprovning med fyra rätters middag med sex olika viner från området
                        </div>
                        <div>1195 kr/person</div>
                    </div>

                    <div className="wine-tasting--description">
                        <div className="silver">
                            Vinprovning med tilltugg med sex olika viner från området
                        </div>
                        <div>765 kr/person</div>
                    </div>

                    <div className="wine-tasting--description">
                        <div className="silver">
                            Priserna gäller för sällskap om minst 4 personer. Vi ser gärna att alla
                            personer i sällskapet väljer samma vindistrikt. Endast
                            förhandsbokningar.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default WineTasting
