import React from "react"

const NavButton = ({ thisCourse, selectedCourse, clickOnNavButton }) => {
  return (
    <button
      className={`course-button${
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
