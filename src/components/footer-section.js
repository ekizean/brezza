import React from 'react'

const FooterSection = ({ header, content }) => (
    <div className="col-sm-3">
        <h2>{header}</h2>
        {content}
    </div>
)

export default FooterSection
