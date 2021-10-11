import * as React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
    }}
  >
      <h1>
        {/* <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        > */}
          {siteTitle}
        {/* </Link> */}
      </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `this is test`,
}

export default Header
