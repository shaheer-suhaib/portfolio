import React from "react";
import "./experience.css";
import MovingBorders from "./MovingBorders";

const experience = () => {
  return (
    <div className="top-container">
      <div className="columns-container">
        <div className="skill-container">
          <h2 className="skills-title">SKILLS</h2>
          <div className="skills-list">
            <div className="skill-category">
              <h3 className="category-title">Languages:</h3>
              <div className="skill-items">
                <span className="skill-item">
                  <span className="skill-icon">🐍</span>
                  <span>Python</span>
                </span>
                <span className="skill-item">
                  <span className="skill-icon">☕</span>
                  <span>Java</span>
                </span>
                <span className="skill-item">
                  <span className="skill-icon">⚙️</span>
                  <span>C++</span>
                </span>
              </div>
            </div>
            
            <div className="skill-category">
              <h3 className="category-title">Frameworks:</h3>
              <div className="skill-items">
                <span className="skill-item">
                  <span className="skill-icon">🔗</span>
                  <span>LangChain</span>
                </span>
                <span className="skill-item">
                  <span className="skill-icon">📊</span>
                  <span>LangGraph</span>
                </span>
                <span className="skill-item">
                  <span className="skill-icon">🧠</span>
                  <span>TensorFlow</span>
                </span>
                <span className="skill-item">
                  <span className="skill-icon">🤖</span>
                  <span>CrewAI</span>
                </span>
                <span className="skill-item">
                  <span className="skill-icon">⚛️</span>
                  <span>ReactJS</span>
                </span>
              </div>
            </div>
            
            <div className="skill-category">
              <h3 className="category-title">Knowledge:</h3>
              <div className="skill-items">
                <span className="skill-item">
                  <span className="skill-icon">📈</span>
                  <span>Regression</span>
                </span>
                <span className="skill-item">
                  <span className="skill-icon">🏷️</span>
                  <span>Classification</span>
                </span>
                <span className="skill-item">
                  <span className="skill-icon">🧬</span>
                  <span>ANNs</span>
                </span>
                <span className="skill-item">
                  <span className="skill-icon">🖼️</span>
                  <span>CNNs</span>
                </span>
              </div>
            </div>
            
            <div className="skill-category">
              <h3 className="category-title">Version Control & Collaboration:</h3>
              <p className="skill-description">
                Experience in version control using Git and GitHub for collaborative project development
              </p>
            </div>
            
            <div className="skill-category">
              <h3 className="category-title">DevOps & Tools:</h3>
              <div className="skill-items">
                <span className="skill-item">
                  <span className="skill-icon">🐳</span>
                  <span>Docker</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="experience-container">
          <h2 className="experience-title">EXPERIENCE</h2>
          <MovingBorders
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="experience-card"
          >
            <h2 className="title"> Generative AI Intern </h2>
            <p className="description">
            Developed a meeting assistant using CrewAI to extract action items and tasks from meeting transcripts | Integrated Slack API to automatically push extracted tasks and updates to team channels.
            </p>
          </MovingBorders>
          <MovingBorders
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="experience-card"
          >
            <h2 className="title">
              Research Intern - Research and Analysis (Portable Fetal Ultrasound
              Device)
            </h2>
            <p className="description">
            Developed a meeting assistant using CrewAI to extract action items and tasks from meeting transcripts | Integrated Slack API to automatically push extracted tasks and updates to team channels.
            </p>
          </MovingBorders>
        </div>
      </div>
    </div>
  );
};

export default experience;
