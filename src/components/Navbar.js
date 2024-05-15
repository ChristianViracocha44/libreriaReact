import React, { useState } from 'react'
import luna from "../resources/luna.png"
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"


export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className='navBar'>
            <Link to="/home" className="navBar__title"><img src={luna} alt="Luna" className="navBar__img" />  </Link>


            <div className="navBar__menu" onClick={() => setMenuOpen(!menuOpen)}>
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
                    <Link to="/catalog">Catalogo</Link>
                </li>

                <li>
                    <Link to="/store">Tienda</Link>
                </li>

                <li>
                    <Link to="/management">Management</Link>
                </li>

                <li>
                    <Link to="/about">Acerca</Link>
                </li>
                <li>
                    <Link to="/notfound">NotFound</Link>
                </li>

            </ul>
        </nav>
    )
}
