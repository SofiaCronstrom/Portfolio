import * as React from "react";
import Burgare from "../images/burger.svg";
import { useState } from "react";
import {Link} from "react-scroll";


const MenuNav = () => {
   
    const [open, setOpen] = useState(false);

    return ( 
        <div className="menu-wrapper">
        
        <img src={Burgare} alt="menu burger" className="burger" onClick={() =>{setOpen(!open);}}/>
        
        <nav className={open ? "open" : null}>
        
            <ul>
            <Link activeClass="active" to="container-index" spy={true} smooth={true}><li>Home</li></Link>
            <Link to="wrapper-about" spy={true} smooth={true}><li>About</li></Link>
            <Link to="wrapper-projects" spy={true} smooth={true}><li>Projects</li></Link>
            <Link to="wrapper-contact" spy={true} smooth={true}><li>Contact</li></Link>
            </ul>
            </nav>
        </div>
     );
}
 
export default MenuNav;