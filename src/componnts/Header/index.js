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
    <nav className="nav">

      <div className="nav-header">
        <Link to="home" smooth={true} duration={500} offset={-70}>
          <h1>OY<span>dev.</span></h1>
        </Link>
        <div className='nav-menu' onClick={toggleHamburger}>
          {hamburger ? <IconX size={32}  /> : <IconMenu2 size={32} className='menu-icon' />}
        </div>
      </div>
      <div className={`nav-links ${hamburger ? 'active' : ''}`}>
        <Link to="home" activeClass='active' smooth={true} duration={500} offset={-70} onClick={toggleHamburger}>
          Home
        </Link>
        <Link to="skills" activeClass='active' smooth={true} duration={500} offset={-70} onClick={toggleHamburger}>
          Skills
        </Link>
        <Link to="about" activeClass='active' smooth={true} duration={500} offset={-70} onClick={toggleHamburger}>
          About
        </Link>
        <Link to="projects" activeClass='active'smooth={true} duration={500} offset={-70} onClick={toggleHamburger}>
          Projects
        </Link>
        <Link to="contact" activeClass='active'smooth={true} duration={500} offset={-70} onClick={toggleHamburger}>
          Contact
        </Link>
      </div>
   
    </nav>
  );
};

export default Header;
