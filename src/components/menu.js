import * as React from "react";
import {Link} from "react-scroll";
import { slide as Menu } from 'react-burger-menu'
import './burger.css'
const MenuNav = () => {

    const toggleMenu = ({ isOpen }) => {
        const menuWrap = document.querySelector(".bm-menu-wrap");
        isOpen
          ? menuWrap.setAttribute("aria-hidden", false)
          : menuWrap.setAttribute("aria-hidden", true);
      };
   
    
    
    return ( 
        
        <div className="menu-wrapper">
       <Menu noOverlay onStateChange={toggleMenu}>
        <nav className="bm-item-list">
        
            <ul >
            <Link activeClass="active" to="container-index" spy={true} smooth={true}><li>Home</li></Link>
            <Link to="wrapper-about" spy={true} smooth={true}><li>About</li></Link>
            <Link to="wrapper-projects" spy={true} smooth={true}><li>Projects</li></Link>
            <Link to="wrapper-contact" spy={true} smooth={true}><li>Contact</li></Link>
            </ul>
            </nav>
        </Menu>
        </div>
        
     );
}
 
export default MenuNav;