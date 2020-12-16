import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

const NavButtons = ({ close }) => {
    const handleClick = element => {
        scrollTo(element)
        close && close()
    }

    return (
        <>
            <button className="nav-button pointer" onClick={() => handleClick('#menu')}>
                Meny
            </button>
            <button className="nav-button pointer" onClick={() => handleClick('.wine-tasting')}>
                Vinprovningar
            </button>
            <button className="nav-button pointer" onClick={() => handleClick('.gallery')}>
                Galleri
            </button>
            <button className="nav-button pointer" onClick={() => handleClick('#about')}>
                Om&nbsp;oss
            </button>
            <button className="nav-button pointer" onClick={() => handleClick('footer')}>
                Kontakt
            </button>
        </>
    )
}

export default NavButtons
