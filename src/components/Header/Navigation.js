import React from "react";
import { Link } from "react-router-dom";
import "./header.scss"

const Navigation = () => {
    return <header className="header">
        <nav>
            <ul>
                <li>
                    <Link className="nav__link" to='/'>Home</Link>
                </li>
                <li>
                    <Link className="nav__link" to='/stats'>Stats</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default Navigation;