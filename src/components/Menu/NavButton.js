import React from "react"
import "./NavButton.css"

const NavButton = ({ dishType, selectedDishType, clickOnNavButton }) => {
  console.log(selectedDishType)
  return (
    <button
      className={`dish-type-button${
        dishType.toLowerCase() === selectedDishType.toLowerCase()
          ? " selected"
          : ""
      }`}
      onClick={() => clickOnNavButton(dishType)}
    >
      {dishType}
    </button>
  )
}

export default NavButton
