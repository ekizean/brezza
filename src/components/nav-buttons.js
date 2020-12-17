import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

const NavButtons = ({ close }) => {
    const handleClick = element => {
        scrollTo(element)
        close && close()
    }

    return (
        <>
            <button className="nav-button" onClick={() => handleClick('#menu')}>
                Meny
            </button>
            <button className="nav-button" onClick={() => handleClick('.wine-tasting')}>
                Vinprovningar
            </button>
            <button className="nav-button" onClick={() => handleClick('.gallery')}>
                Galleri
            </button>
            <button className="nav-button" onClick={() => handleClick('#about')}>
                Om&nbsp;oss
            </button>
            <button className="nav-button" onClick={() => handleClick('footer')}>
                Kontakt
            </button>
        </>
    )
}

export default NavButtons
