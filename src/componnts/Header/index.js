import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Link } from 'react-scroll';
import "./index.css";


const Header  = () =>  {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };



  return (
    <header class="header">
      <div class="header__content">

      <Link to="home" smooth={true} duration={500} offset={-70} >
          <span class="header__title">OYdev.</span>
    </Link>
        <div class="header__main">
          <ul class="header__links">
            <li class="header__link-wrapper">
            <Link to="home" smooth={true} duration={500} offset={-70} className="header__link"> Home </Link>
            </li>
            <li class="header__link-wrapper">
            <Link to="about" smooth={true} duration={500} offset={-90}className="header__link" >About </Link>
            </li>
            <li className="header__link-wrapper">
            <Link to="skills" smooth={true} duration={500} offset={-100}className="header__link">Skills</Link>
            </li>
            <li class="header__link-wrapper">
            <Link to="projects" smooth={true} duration={500} offset={-70}className="header__link"> Projects </Link>
            </li>
            <li class="header__link-wrapper">
            <Link to="contact" smooth={true} duration={500} offset={-50}className="header__link"> Contact </Link>
            </li>
          </ul>
          <div class="header__main-ham-menu-cont"  onClick={hamburgerMenu}>
           {hamburger ? <IconX size={32} color='#4831d4' />:<IconMenu2 size={32} color='#4831d4' /> }
          </div>
        </div>
      </div>
      <div class={`header__sm-menu ${hamburger ? "header__sm-menu--active" :""}`}>
        <div class="header__sm-menu-content">
          <ul class="header__sm-menu-links">
            <li class="header__sm-menu-link" onClick={hamburgerMenu}>
              <a href="./"> Home </a>
            </li>

            <li class="header__sm-menu-link"  onClick={hamburgerMenu}>
              <a href="./#about"> About </a>
            </li>

            <li class="header__sm-menu-link"  onClick={hamburgerMenu}>
              <a href="./#projects"> Projects </a>
            </li>

            <li class="header__sm-menu-link"  onClick={hamburgerMenu}>
              <a href="./#contact"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
