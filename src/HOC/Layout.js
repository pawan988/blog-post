import { PinDropSharp } from "@mui/icons-material";
import React from "react";
import Toolbar from "../Component/Toolbar/Toolbar";
import Footer from "../Component/Toolbar/Footer/Footer"

const Layout = (props) => {
    return(
        <>
         <Toolbar />
         <main className="main-page">{props.children}</main>
         <Footer />
        </>
    )
}
export default Layout;