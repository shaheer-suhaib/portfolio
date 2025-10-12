import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="About">
      <div className="img">
        <img src=".\images\face.png" alt="" />{" "}
      </div>
      <div className="about-right">
        <div className="details">
          <p>
            im a software engineer based in pakistan and gradueated from Nust
            university,Currently working on Agentic Ai projects and Keeping me
            uptodate with industry demands
          </p>
        </div>
        <div className="skills">
          <div className="skill-name">Html&Css</div>
          <div className="skill-name">React Js</div>
          <div className="skill-name">LangGraph</div>
          <div className="skill-name">CrewAi</div>
        </div>
        <div className="experience">
          <div className="experience-type">
            <h1>10+</h1>
            <p>Years of Experience</p>
          </div>
          <hr />
          <div className="experience-type">
            <h1>90+</h1>
            <p>Projects Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
