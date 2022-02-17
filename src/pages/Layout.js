import React from "react";
import Navigation from "../components/Header/Navigation";
import "./layout.scss";

const Layout = ({ children }) => {

    return <div>
        <Navigation />
        {children}
    </div>
}

export default Layout;