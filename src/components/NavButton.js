import React from "react"
import "./NavButton.css"

const NavButton = ({ thisCourse, selectedCourse, clickOnNavButton }) => {
  return (
    <button
      className={`dish-type-button${
        thisCourse.toLowerCase() === selectedCourse.toLowerCase()
          ? " selected"
          : ""
      }`}
      onClick={() => clickOnNavButton(thisCourse)}
    >
      {thisCourse}
    </button>
  )
}

export default NavButton
