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
      <Link 
      onClick={()=> handleCloseMenu()} 
      className="menu-item" 
      to="home" 
      activeClass="active" 
      smooth={true} 
      style={{"cursor":"pointer"}}
      spy={true}
      duration={2000}
      delay={500}>
        Inicio
      </Link>
      <Link 
      onClick={()=> handleCloseMenu()} 
      className="menu-item" 
      to="about" 
      activeClass="active" 
      smooth={true} 
      style={{"cursor":"pointer"}}
      spy={true}
      duration={2000}
      delay={500}>
        Campos y Chacras
      </Link>
      <Link 
      onClick={()=> handleCloseMenu()} 
      className="menu-item" 
      to="products" 
      activeClass="active" 
      smooth="true" 
      style={{"cursor":"pointer"}}
      spy={true}
      duration={2000}
      delay={500}>
        Desarrollos y Comunidades
      </Link>
      <Link 
      onClick={()=> handleCloseMenu()} 
      className="menu-item" 
      to="services" 
      activeClass="active" 
      smooth="true" 
      style={{"cursor":"pointer"}} 
      spy={true}
      duration={2000}
      delay={500} >
        Propiedades
      </Link>
      <Link 
      onClick={()=> handleCloseMenu()} 
      className="menu-item" 
      to="client" 
      activeClass="active" 
      smooth="true" 
      style={{"cursor":"pointer"}}
      spy={true}
      duration={2000}
      delay={500}>
        Alquileres
      </Link>
      <Link 
      onClick={()=> handleCloseMenu()} 
      className="menu-item" 
      to="faqs" 
      activeClass="active" 
      smooth="true" 
      style={{"cursor":"pointer"}} 
      spy={true}
      duration={2000}
      delay={500}>
        Argentina
      </Link>
      <Link 
      onClick={()=> handleCloseMenu()} 
      className="menu-item" 
      to="contact" 
      activeClass="active" 
      smooth="true" 
      style={{"cursor":"pointer"}} 
      spy={true}
      duration={2000}
      delay={500}>
        Contacto
      </Link>
      <Link 
      onClick={()=> handleCloseMenu()} 
      className="menu-item" 
      to="contact" 
      activeClass="active" 
      smooth="true" 
      style={{"cursor":"pointer"}} 
      spy={true}
      duration={2000}
      delay={500}>
        ES
      </Link>
      
    
    </Menu>
  );
};
export default NavBar


