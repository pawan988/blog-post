import React from "react";
import Logo from "../UI/Logo";
import Navitems from "./NavItems/Navitems";

const Toolbar = (props) => {
    return(
         <header className="header">
             <Logo />
             <menu className="navigation"> <Navitems/> </menu>
         </header>
          
    )
}
export default Toolbar;