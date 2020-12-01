import React from 'react'
import { Link } from 'gatsby'
import './book-button.scss'

const BookButton = () => (
    <Link
        className="book-button"
        target="_blank"
        rel="noreferrer"
        to="https://cloud.caspeco.se/public/webBooking?isWebBooking=true&system=se_breupp&unitId=13"
    >
        Boka&nbsp;bord
    </Link>
)
export default BookButton
