import React from 'react'

import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <a href="/">
                    <ul className="navbar-logo-container">
                        <li className="logo-li">
                            <img src="/logo/logo_1.png" alt=""></img>
                        </li>
                        <li className="name-li">
                            <img src="/logo/logo-2.png" alt=""></img>
                        </li>
                    </ul>
                </a>
            </nav>
        </div>
    )
}

export default Navbar
