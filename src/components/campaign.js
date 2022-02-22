import React from 'react'
import './campaign.scss'
import scrollTo from 'gatsby-plugin-smoothscroll'

const Campaign = () => (
    <div className="campaign-wrapper">
        <div className="campaign">
            <div className="campaign__content">
                <h3>Vinprovningar</h3>
                <h4>Boka vinkällaren genom att kontakta oss</h4>
                <button className="scroll-button" onClick={() => scrollTo('.wine-tasting')}>
                    TILL VINPROVNINGAR
                </button>
            </div>
        </div>
    </div>
)
export default Campaign
