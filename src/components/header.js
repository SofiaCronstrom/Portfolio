import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Burgare from "../images/burgare.svg"

const Header = () => {

  return (
<header>
   <div className="header">
    <img src={Burgare}/>
   </div> 
</header>
  )
}

export default Header
