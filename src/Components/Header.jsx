import React from "react";
import "../Styles/header.css";
function Header() {
  return (
    <div className="header">
      <div className="left-section">
        <img
          alt=" "
          className="hamburger-menu"
          src="icons/hamburger-menu.svg"
        />
        <div className="youtube-logo">
          <div className="youtube-logo-icon">
            <img
              alt=" "
              className="youtube-logo"
              src="icons/youtube-logo.svg"
            />
            <h3 className="india-icon">IN</h3>
          </div>
        </div>
      </div>
      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />
        <button className="search-button">
          <img alt=" " className="search-icon" src="icons/search.svg" />
          <div className="tooltip">Search</div>
        </button>

        <button className="voice-search-button">
          <img
            alt=" "
            className="voice-search-icon"
            src="icons/voice-search-icon.svg"
          />
          <div className="tooltip">Search with your voice</div>
        </button>
      </div>
      <div className="right-section">
        <div className="upload-icon-container">
          <img alt=" " className="upload-icon" src="icons/upload.svg" />
          <div className="tooltip">Create</div>
        </div>
        {/* <img
          alt=" "
          className="youtube-apps-icon"
          src="icons/youtube-apps.svg"
        /> */}
        <div className="notifications-icon-container">
          <img
            alt=" "
            className="notifications-icon"
            src="icons/notifications.svg"
          />
          <div className="notifications-count">3</div>
          <div className="tooltip">Notifications</div>
        </div>
        <img
          alt=" "
          className="current-user-picture"
          src="channel-pictures/my-channel.jpg"
        />
        <div className="my-channel-info"></div>
      </div>
    </div>
  );
}
export default Header;
