import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div id="home" className="hero-section">
      <div className="img">
        <img src=".\images\face.png" alt="" />
      </div>
      <h1>
        <span>m software engineer</span>Im software engineer based in pakistan
      </h1>
      <div className="hero-connect">
        <div className="connect-me">Connect With Me</div>
        <div className="resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
