import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#111111`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <button onClick={() => scrollTo("#menu")}>Meny</button>
      <button onClick={() => scrollTo("#menu")}>Vinprovningar</button>
      <button onClick={() => scrollTo("#menu")}>Galleri</button>
      <button onClick={() => scrollTo("#about")}>Om oss</button>
      <button onClick={() => scrollTo("#about")}>Kontakt</button>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
