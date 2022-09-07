import React from 'react'
import NavbarB from './Navbar-b'
import Menu from '../Home/Menu'
import Filter from './Filter'
import Contact from '../Contact/Contact'
import './Browse.css'

function Browse() {
    return (
        <div className="browse-container">
            <NavbarB/>
            <Menu/>
            <Filter/>
            <div className="items-container">
                <div className="item-container">
                    <img src="/img/slide0.jpg" alt=""></img>
                    <h3>Casa 01</h3>
                </div>
                <div className="item-container">
                    <img src="/img/slide1.jpg" alt=""></img>
                    <h3>Casa 02</h3>
                </div>
                <div className="item-container">
                    <img src="/img/slide2.jpg" alt=""></img>
                    <h3>Casa 03</h3>
                </div>
                <div className="item-container">
                    <img src="/img/slide0.jpg" alt=""></img>
                    <h3>Casa 04</h3>
                </div>
                <div className="item-container">
                    <img src="/img/slide1.jpg" alt=""></img>
                    <h3>Casa 05</h3>
                </div>
                <div className="item-container">
                    <img src="/img/slide2.jpg" alt=""></img>
                    <h3>Casa 06</h3>
                </div>
            </div>
            <Contact/>
        </div>
    )
}

export default Browse
