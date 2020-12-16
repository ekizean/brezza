import React from 'react'
import './footer-section.scss'

const FooterSection = ({ header, content }) => (
    <div className="col-sm-3 footer-section">
        <h2>{header}</h2>
        {content}
    </div>
)

export default FooterSection
