import React from "react";
import "./NavigationBar.css";
const NavigationBar = () => {
  return (
    <div className="navBar">
      <ul className="nav-menue">
        <li>Home</li>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default NavigationBar;
