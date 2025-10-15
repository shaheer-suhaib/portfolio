import React from "react";
import "./NavigationBar.css";
import { useState } from "react";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll"; // ✅ Add this import

const NavigationBar = () => {
  const [menue, setMenue] = useState("home");

  return (
    <div className="navBar">
      <ul className="nav-menue">
        <li>
          <AnchorLink className="AnchorLink" href="#home">
            {" "}
            <p onClick={() => setMenue("home")}>Home</p>{" "}
          </AnchorLink>

          {menue === "home" ? <img src={underline} alt="" /> : null}
        </li>
        <li>
          <AnchorLink className="AnchorLink" offset={50} href="#about">
            {" "}
            <p onClick={() => setMenue("about")}> About Me</p>
          </AnchorLink>

          {menue === "about" ? <img src={underline} alt="" /> : null}
        </li>
        <li>
          <AnchorLink className="AnchorLink" href="#work">
            {" "}
            <p onClick={() => setMenue("portfolio")}>Portfolio</p>
          </AnchorLink>
          {menue === "portfolio" ? <img src={underline} alt="" /> : null}
        </li>
        <li>
          <AnchorLink className="AnchorLink" href="#contact">
            {" "}
            <p onClick={() => setMenue("contact")}>Contact</p>
          </AnchorLink>
          {menue === "contact" ? <img src={underline} alt="" /> : null}
        </li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default NavigationBar;
