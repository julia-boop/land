import React from 'react'

import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <a href="/">
                    <ul className="navbar-logo-container">
                        <li className="logo-li">
                            <img src="/logo/logo-1.png" alt=""></img>
                        </li>
                        <li className="name-li">
                            <img src="/logo/logo-4.png" alt=""></img>
                        </li>
                    </ul>
                </a>
            </nav>
        </div>
    )
}

export default Navbar
