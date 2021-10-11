/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

// import * as React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
// import "./layout.css"

// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <Header siteTitle={data.site.siteMetadata?.title || `This is Default Title`} />
//       <div>
//         <main>{children}</main>
//         <footer
//           style={{
//             marginTop: `2rem`,
//             background: `rebeccapurple`
//           }}
//         >
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.com">Gatsby</a>
//         </footer>
//       </div>
//     </>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout

import React, { useState } from 'react';
import { GlobalStyles, Primary } from './Layout.style';

const Layout = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    // console.log(children);
    return (
        <div>Layout</div>
    )
}

export default Layout;