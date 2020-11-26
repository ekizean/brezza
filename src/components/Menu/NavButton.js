import React from 'react'
import './NavButton.scss'

const NavButton = ({ dishType, selectedDishType, clickOnNavButton }) => {
    return (
        <button
            className={`dish-type-button${
                dishType.toLowerCase() === selectedDishType.toLowerCase() ? ' selected' : ''
            }`}
            onClick={() => clickOnNavButton(dishType)}
        >
            {dishType}
        </button>
    )
}

export default NavButton
