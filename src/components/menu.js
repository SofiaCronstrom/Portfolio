import { isFunction } from "lodash";
import * as React from "react";
import Burgare from "../images/burger.svg";


const MenuNav = () => {
    return ( 
        <img className="burger" src={Burgare} alt="menu burger"/>
     );
}
 
export default MenuNav;