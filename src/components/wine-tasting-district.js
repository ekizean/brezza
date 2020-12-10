import React from 'react'
import './wine-tasting-district.scss'

const WineTastingDistrict = ({ name, description }) => (
    <div className="col-sm-4">
        <div className="wine-tasting--district gold-box">
            <h2>{name}</h2>
            <div>{description}</div>
        </div>
    </div>
)

export default WineTastingDistrict
