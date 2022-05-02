import React from "react";
import {NavLink} from "react-router-dom";

const Navitems = (props) => {
    return(
        <div className="navItems">
           <NavLink exact to="/">Home</NavLink>
           <NavLink exact to="/signIn">signIn</NavLink>
           <NavLink exact to="/signUp">SignUp</NavLink>
           <NavLink exact to="/profile">Profile</NavLink>
           <NavLink exact to="/blog-display">blog-display</NavLink>
        </div>
    )
}
export default Navitems;