import React from "react";
import "../Styles/sidebar.css";
function SideBar() {
  return (
    <nav className="sidebar">
      <section className="main-link">
        <div className="sidebar-link">
          <img src="icons/home.svg" alt=" " />
          <span>Home</span>
        </div>
        <div className="sidebar-link">
          <img src="icons/youtube-shorts.svg" alt=" " />
          <span>Shorts</span>
        </div>
        <div className="sidebar-link">
          <img src="icons/subscriptions.svg" alt=" " />
          <span>Subscriptions</span>
        </div>
      </section>
      <section className="user-link">
        <div className="sidebar-link">You &#62;</div>
        <div className="sidebar-link">
          <img src="icons/home.svg" alt=" " />
          <span>Home</span>
        </div>
        <div className="sidebar-link">
          <img src="icons/youtube-shorts.svg" alt=" " />
          <span>Your Channel</span>
        </div>
        <div className="sidebar-link">
          <img src="icons/subscriptions.svg" alt=" " />
          <span>History</span>
        </div>
        <div className="sidebar-link">
          <img src="icons/originals.svg" alt=" " />
          <span>Watch Later</span>
        </div>

        <div className="sidebar-link">
          <img src="icons/library.svg" alt=" " />
          <span>Show More</span>
        </div>
      </section>
      <section className="subsrciptions">
        <div className="sidebar-link">Subscriptions </div>
        <div className="sidebar-link">
          <img src="channel-pictures/subscribed-channel.jpeg" alt=" " />
          <span>SchoolPen</span>
        </div>
        <div className="sidebar-link">
          <img src="channel-pictures/subscribed-channel.jpeg" alt=" " />
          <span>SchoolPen</span>
        </div>
        <div className="sidebar-link">
          <img src="channel-pictures/subscribed-channel.jpeg" alt=" " />
          <span>SchoolPen</span>
        </div>
        <div className="sidebar-link">
          <img src="channel-pictures/subscribed-channel.jpeg" alt=" " />
          <span>SchoolPen</span>
        </div>
        <div className="sidebar-link">
          <img src="channel-pictures/subscribed-channel.jpeg" alt=" " />
          <span>SchoolPen</span>
        </div>
      </section>
    </nav>
  );
}
export default SideBar;
