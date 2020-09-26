import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navbar = ({ siteTitle }) => (
  <header>
  <nav>
    <Link to ="/">For Context</Link>
    <Link to ="/about">About</Link>
    <Link to ="/blog">Blog</Link>
    <Link to ="/contact">Contact</Link>
  </nav>
  </header>
)
export default Navbar
