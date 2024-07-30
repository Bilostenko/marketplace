import React from "react";
import './header.css';
import logoColor from '../../assets/logo/png/logo-color.png';
// icons
import { MdOutlineMessage } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaArrowTurnDown } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <img src={logoColor} className="header__logo" alt="logo" />+
        <div className="header__panel">
          <a href="#" className="header__link">
            <MdOutlineMessage />
            <span>Messages</span>
          </a>
          <ul className="language__list">
            <li className="language__item">EN</li>
            <li className="language__item">UKR</li>
          </ul>
          <IoMdHeartEmpty />
          <div className="header__profile">
            <CgProfile />
            <span>Your profile</span>
            <FaArrowTurnDown />
          </div>
          <button>Post an advertisement</button>
        </div>
      </div>
    </header>
  )
}

export default Header;
