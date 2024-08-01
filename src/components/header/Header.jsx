import React from "react";
import './header.css';
import profileIcon from '../../assets/logo/face-icon.png'
import logoColor from '../../assets/logo/png/logo-color.png';
import heartIcon from '../../assets/logo/heart-icon.png'
// icons
import { IoMdHeartEmpty } from "react-icons/io";
import { FaArrowTurnDown } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <img src={logoColor} className="header__logo icon-logo" alt="logo" />+
        <div className="header__panel">
          <a href="#" className="header__link" >
            <img src={heartIcon} alt="heart-icon" className="icon"/>
            <span>Messages</span>
          </a>
          <ul className="language__list">
            <li className="language__item">EN</li>
            <li className="language__item">UKR</li>
          </ul>
          <IoMdHeartEmpty />
          <div className="header__profile">
          <img src={profileIcon} alt="profile-icon" className="icon"/>
            <span>Your profile</span>
            <FaArrowTurnDown />
          </div>
          <a href="/"><button class="bn30">Place an advertisement</button></a>
        </div>
      </div>
    </header>
  )
}

export default Header;
