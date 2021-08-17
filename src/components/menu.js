import * as React from "react";
import Burgare from "../images/burger.svg";
import { useState } from "react";

const MenuNav = () => {
   
    const [open, setOpen] = useState(false);

    return ( 
        <div className="menu-wrapper">
        <img className="burger" src={Burgare} alt="menu burger" onClick={() =>{setOpen(!open);}}/>
        <nav className={open ? "open" : null}>
        
            <ul>
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Contact</li>
            </ul>
            </nav>
        </div>
     );
}
 
export default MenuNav;