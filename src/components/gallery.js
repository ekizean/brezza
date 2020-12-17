import React from 'react'
import './gallery.scss'

import WineCellarImage from './images/wine-cellar'
import LargeDiningRoomImage from './images/large-dining-room'
import SmallDiningRoomImage from './images/small-dining-room'
import SkaldjurImage from './images/skaldjur'
import KassaImage from './images/kassa'
import CharktallrikImage from './images/charktallrik'

const Gallery = () => (
    <div className="gallery">
        <h1 className="text-center">Galleri</h1>
        <div className="row">
            <div className="col-sm-4 image-container">
                <WineCellarImage />
            </div>
            <div className="col-sm-4 image-container">
                <LargeDiningRoomImage />
            </div>
            <div className="col-sm-4 image-container">
                <SkaldjurImage />
            </div>
        </div>
        <div className="row">
            <div className="col-sm-4 image-container">
                <KassaImage />
            </div>
            <div className="col-sm-4 image-container">
                <CharktallrikImage />
            </div>
            <div className="col-sm-4 image-container">
                <SmallDiningRoomImage />
            </div>
        </div>
    </div>
)

export default Gallery
