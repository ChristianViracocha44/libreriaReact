import React, { useState } from 'react'
import luna from "../resources/luna.png"
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"


export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav>
            <Link to="/home" className="title"><img src={luna} alt="Luna" className="logo-navbar" />  </Link>


            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={menuOpen ? "open" : ""}>

                <li>
                    <Link to="/home">Home</Link>
                </li>

                <li>
                    <Link to="/catalog">Catalog</Link>
                </li>

                <li>
                    <Link to="/store">Store</Link>
                </li>

                <li>
                    <Link to="/management">Management</Link>
                </li>

                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/notfound">NotFound</Link>
                </li>

            </ul>
        </nav>
    )
}
