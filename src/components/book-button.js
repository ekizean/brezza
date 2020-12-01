import React from 'react'
import { Link } from 'gatsby'
import './book-button.scss'

const BookButton = ({ text, link }) => (
    <Link className="book-button" target="_blank" rel="noreferrer" to={link}>
        {text}
    </Link>
)
export default BookButton
