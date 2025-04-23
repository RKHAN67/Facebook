import React from "react";
import {FaFacebook ,FaFontAwesomeFlag,FaHome,FaSearch ,FaVideo,  FaUsers, FaGamepad, FaPlus, FaFacebookMessenger, FaBell, FaCaretDown,  } from "react-icons/fa";
const Navbar =()=>{
    return(
        <div className="navbar">
       <div className="navbar__first">
        <div className="navbar__first-logo">
        <FaFacebook  className="navbar__logo"/>
        </div>
        <div className="navbar__first-search">
        <input type="text" className="navbar__first-searchbar" placeholder="Facebook Search" />
        <FaSearch  className="navbar__searchIcon"/>
        </div>
       </div>
       <div className="navbar__middle">
        <div className="middleIcon">
          <FaHome className="Navbar__middle-icons"/>
        </div>
        <div className="middleIcon">
          <FaFontAwesomeFlag className="Navbar__middle-icons"/>
          <div className="navbar__notify">3</div>
        </div>
        <div className="middleIcon">
          <FaVideo className="Navbar__middle-icons"/>
          <div className="navbar__notify">10</div>
        </div>
        <div className="middleIcon">
          <FaUsers className="Navbar__middle-icons"/>
          <div className="navbar__notify">22</div>
        </div>
        <div className="middleIcon">
          <FaGamepad className="Navbar__middle-icons"/>
          <div className="navbar__notify">5</div>
        </div>
       </div>
       <div className="navbar__last">
       <div className="navbar__last-section">
        <FaPlus/>
       </div>
       <div className="navbar__last-section">
        <FaFacebookMessenger/>
       </div>
       <div className="navbar__last-section">
        <FaBell/>
       </div>
       <div className="navbar__last-section">
        <FaCaretDown/>
       </div>
       </div>

        </div>
      );
};

export default Navbar