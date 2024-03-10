import React, { useState } from 'react';
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Link } from 'react-scroll';
import './index.css';

const Header = () => {
  const [hamburger, setHamburger] = useState(false);

  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };

  return (
    <nav className='nav-container'>
      <div className='desktop-container'>
     
        <Link to="home" smooth={true} duration={500} offset={-70} >
     
          <h1>OY<span>dev.</span></h1>
        
          </Link>
        
      
        <div className='menu-icon' onClick={toggleHamburger}>
          {hamburger ? <IconX size={32}   className='icon-x'/> : <IconMenu2 size={32} />}
        </div>
        <ul className={`desktop-ul-container ${hamburger ? 'open' : ''}`}>
        <li>
            <Link to="home" smooth={true} duration={500} offset={-70} onClick={toggleHamburger}>
              Home
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} offset={-70} onClick={toggleHamburger}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} offset={-70} onClick={toggleHamburger}>
              About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} offset={-70} onClick={toggleHamburger}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-70} onClick={toggleHamburger}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;