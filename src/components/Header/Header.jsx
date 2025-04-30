import React from "react";
import "../../../src/App.css";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const Header = () => {
  return (
    <header className="header">
      {/* Logo et titre */}
      <div className="header-left">
        <img src="/Logo/Logo (2).svg" alt="logo" />
      </div>

      {/* Barre de recherche */}
      <div className="header-search">

          <SearchOutlinedIcon  className="search-icon"/>
        <input type="text" placeholder="Search..." />
      </div>

      {/* Icônes et avatar */}
      <div className="header-right">
      <div className="icon-container">
          <DarkModeOutlinedIcon width={24} height={24} />

        </div>
        <div className="icon-container">
          <ChatBubbleOutlineIcon width={24} height={24} />
          <div className="badge">1</div>
        </div>
        <div className="icon-container">
          <NotificationsNoneIcon width={24} height={24} />
          <div className="badge">1</div>
        </div>
        <img src="/avatar.jpg" alt="avatar" className="avatar" />
      </div>
    </header>
  );
};

export default Header;
