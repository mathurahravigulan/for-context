import PropTypes from "prop-types"
import React from "react"
import  "./header.css";
import forContext from "../images/for-context-logo.png"
import polaroid from "../images/Polaroid.png"
import spotifyPlayer from "../images/spotify-badge.png"

const Header = ({ siteTitle }) => (
  <header className="home">
  <div className="header-container">
    <div className="forcontext">
     <img src = {forContext} />
     <div className="spotify-button"><a target="blank" href="https://open.spotify.com/show/6llxXRebp8PSg3S99sL98Q?si=i_EgZ0DTQRe8Nr794ahboQ"><img src ={spotifyPlayer} className="spotify"/></a></div>
    </div>
    <div>
    <img src = {polaroid}/>
    </div>

  </div>
  <div>
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
