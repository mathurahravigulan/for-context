import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './navbar.css'

const Navbar = ({ siteTitle }) => (
  <div className="header">
  <div className="header-group">
    <Link id = "home" to ="/">For Context</Link>
    <Link to ="/about">About</Link>
    <Link to ="/blog">Blog</Link>
    <Link to ="/contact">Contact</Link>
    </div>
    </div>
)
export default Navbar

