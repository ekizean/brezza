import React from 'react'
import './footer-section.scss'

const FooterSection = ({ header, children }) => (
    <div className="col-sm-3 footer-section">
        {header && <h2>{header}</h2>}
        {children}
    </div>
)

export default FooterSection
