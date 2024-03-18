import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import "./index.css";


const Header  = () =>  {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };



  return (
    <header class="header">
      <div class="header__content">

          
          <span class="header__title">OYdev.</span>
    
        <div class="header__main">
          <ul class="header__links">
            <li class="header__link-wrapper">
              <a href="./" class="header__link"> Home </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./#about" class="header__link">About </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./#projects" class="header__link"> Projects </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./#contact" class="header__link"> Contact </a>
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
