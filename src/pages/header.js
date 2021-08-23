import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Menu from "../components/menu"


const Header = () => {

  return (
<header>
   <div className="header">
   <Menu/>
   </div> 
</header>
  )
}

export default Header
