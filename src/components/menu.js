import { isFunction } from "lodash";
import * as React from "react";
import Burgare from "../images/burger.svg";


const MenuNav = () => {
    return ( 
        <div className="menu-wrapper">
        <img className="burger" src={Burgare} alt="menu burger"/>
        <nav className="navigation">
        
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