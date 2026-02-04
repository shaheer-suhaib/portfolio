import React from "react";
import "./experience.css";
import MovingBorders from "./MovingBorders";
import SkillIcon from "../SkillIcons/SkillIcon";
import psychiatraiLogo from "../../assets/psychiatrai_logo.jfif";
import careLogo from "../../assets/care.jfif";

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
                  <SkillIcon name="python" className="skill-icon" />
                  <span>Python</span>
                </span>
                <span className="skill-item">
                  <SkillIcon name="java" className="skill-icon" />
                  <span>Java</span>
                </span>
                <span className="skill-item">
                  <SkillIcon name="c++" className="skill-icon" />
                  <span>C++</span>
                </span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Frameworks:</h3>
              <div className="skill-items">
                <span className="skill-item">
                  <SkillIcon name="langchain" className="skill-icon" />
                  <span>LangChain</span>
                </span>
                <span className="skill-item">
                  <SkillIcon name="langgraph" className="skill-icon" />
                  <span>LangGraph</span>
                </span>
                <span className="skill-item">
                  <SkillIcon name="tensorflow" className="skill-icon" />
                  <span>TensorFlow</span>
                </span>
                <span className="skill-item">
                  <SkillIcon name="crewai" className="skill-icon" />
                  <span>CrewAI</span>
                </span>
                <span className="skill-item">
                  <SkillIcon name="reactjs" className="skill-icon" />
                  <span>ReactJS</span>
                </span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Knowledge:</h3>
              <div className="skill-items">
                <span className="skill-item">
                  <SkillIcon name="regression" className="skill-icon" />
                  <span>Regression</span>
                </span>
                <span className="skill-item">
                  <SkillIcon name="classification" className="skill-icon" />
                  <span>Classification</span>
                </span>
                <span className="skill-item">
                  <SkillIcon name="anns" className="skill-icon" />
                  <span>ANNs</span>
                </span>
                <span className="skill-item">
                  <SkillIcon name="cnns" className="skill-icon" />
                  <span>CNNs</span>
                </span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">
                Version Control & Collaboration:
              </h3>
              <div className="skill-items">
                <span className="skill-item">
                  <SkillIcon name="git" className="skill-icon" />
                  <span>Git</span>
                </span>
                <span className="skill-item">
                  <SkillIcon name="github" className="skill-icon" />
                  <span>GitHub</span>
                </span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">DevOps & Tools:</h3>
              <div className="skill-items">
                <span className="skill-item">
                  <SkillIcon name="docker" className="skill-icon" />
                  <span>Docker</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="experience-container">
          <h2 className="experience-title">EXPERIENCE</h2>
          <div className="experience-item">
            <div className="experience-date">2026 - Present</div>
            <MovingBorders
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              className="experience-card"
            >
              <div className="title-container">
                <h2 className="title">Full Stack Engineer</h2>
              </div>
              <div className="company-name">Zapply</div>
              <p className="description">
                • Tech Stack: JavaScript, Chrome Extensions, DOM, Mutation Observers, Communication API, Git
                • Develop and optimize autofill functionality for multiple platforms, leveraging DOM queries, selectors, and runtime scripts to enhance efficiency.
                • Implement dynamic field detection using Mutation Observers and message passing APIs to ensure accurate real-time form filling.
                • Refactor platforms codes, resolve large-scale merge conflicts, and prepare pull requests.
                • Workflow optimizations with internal tools to ensure reliability and process accuracy.
              </p>
            </MovingBorders>
          </div>
          <div className="experience-item">
            <div className="experience-date">2022</div>
            <MovingBorders
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              className="experience-card"
            >
              <div className="title-container">
                <h2 className="title">Full Stack AI Intern</h2>
                <div className="company-logo">
                  <img src={psychiatraiLogo} alt="Psychiatrai Logo" />
                </div>
              </div>
              <div className="company-name">Psychiatrai</div>
              <p className="description">
                • Developed a mental health chatbot leveraging Cognitive
                Behavioral Therapy principles to facilitate structured
                therapeutic sessions and provide AI-powered guidance. •
                Engineered backend architecture for CBT conversation flows using
                LangGraph nodes and LangChain components for context-aware
                interactions. • Deployed LangGraph on self-hosted platforms
                utilizing LangGraph Server APIs and integrated backend services
                with React.js frontends featuring responsive UIs
              </p>
            </MovingBorders>
          </div>
          <div className="experience-item">
            <div className="experience-date">2022</div>
            <MovingBorders
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              className="experience-card"
            >
              <div className="title-container">
                <h2 className="title">Ai/Ml intern</h2>
                <div className="company-logo">
                  <img src={careLogo} alt="Care Logo" />
                </div>
              </div>
              <div className="company-name">Care</div>
              <p className="description">
                Conducted comprehensive model research and selection for machine
                learning applications in healthcare domain. • Researched and
                evaluated fetal CLIP model architecture for medical imaging
                analysis. • Documented research findings and model performance
                metrics for fetal CLIP model implementation. • Compiled
                technical documentation detailing model selection criteria,
                evaluation results, and recommendations
              </p>
            </MovingBorders>
          </div>
        </div>
      </div>
    </div>
  );
};

export default experience;
