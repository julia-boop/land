import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Link} from 'react-scroll';

import './Menu.css';
      

const NavBar = () => {
  const [isMenuOpen, handleMenu] = useState(false);
  const handleCloseMenu = () => {
    console.log(isMenuOpen)
    handleMenu(false);
  };
  const handleStateChange = (state) => {
    handleMenu(state.isOpen);
  };
  
  return (
    <Menu 
    right 
    pageWrapId={'page-wrap'} 
    outerContainerId={'outer-container'}
    isOpen={isMenuOpen}
    onStateChange={handleStateChange} >
      <a href="/" onClick={() => handleCloseMenu() } className="menu-item">Inicio</a>
      <a href="/properties/1" onClick={() => handleCloseMenu() } className="menu-item">Campos y Chacras</a>
      <a href="/properties/2" onClick={() => handleCloseMenu() } className="menu-item">Comunidades y Desarrollos</a>
      <a href="/properties/3" onClick={() => handleCloseMenu() } className="menu-item">Propiedades</a>
      <a href="/properties/4" onClick={() => handleCloseMenu() } className="menu-item">Alquileres</a>
      <a href="/properties/5" onClick={() => handleCloseMenu() } className="menu-item">Argentina</a>
    </Menu>
  );
};
export default NavBar


