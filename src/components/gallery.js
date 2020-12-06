import React from 'react'
import WineCellarImage from './images/wine-cellar'
import LargeDiningRoomImage from './images/large-dining-room'
import SmallDiningRoomImage from './images/small-dining-room'
import SkaldjurImage from './images/skaldjur'
import KassaImage from './images/kassa'
import CharktallrikImage from './images/charktallrik'

const Gallery = () => (
    <>
        <h1 className="text-center">Galleri</h1>
        <div className="row">
            <div className="col-sm-4">
                <WineCellarImage />
            </div>
            <div className="col-sm-4">
                <LargeDiningRoomImage />
            </div>
            <div className="col-sm-4">
                <SkaldjurImage />
            </div>
        </div>
        <div className="row">
            <div className="col-sm-4">
                <KassaImage />
            </div>
            <div className="col-sm-4">
                <CharktallrikImage />
            </div>
            <div className="col-sm-4">
                <SmallDiningRoomImage />
            </div>
        </div>
    </>
)

export default Gallery
