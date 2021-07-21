import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Burgare from "../images/burgare.svg"

const Header = () => {

  return (
<header>
   <div className="header">
    <img className="burger" src={Burgare} alt="menu burger image"/>
   </div> 
</header>
  )
}

export default Header
