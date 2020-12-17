import React from 'react'
import './book-button.scss'

const BookButton = ({ text, link }) => (
    <a className="book-button" href={link}>
        {text}
    </a>
)
export default BookButton
