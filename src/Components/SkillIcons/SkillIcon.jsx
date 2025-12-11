import React from "react";

import Langgraph from "../../assets/langgrapg.svg";
import Langchain from "../../assets/langchain.svg";
import Crewai from "../../assets/crewai.png";

// SVG icons from stack folders
import dockerIcon from "../../assets/Images/stack/Docker.svg";
import gitIcon from "../../assets/stack/Git.svg";
import githubIcon from "../../assets/stack/Github.svg";
import javascriptIcon from "../../assets/stack/Javascript.svg";
import nodejsIcon from "../../assets/stack/NodeJs.svg";
// PNG icons from icons folder
import pythonIcon from "../../assets/icons/icons8-python-96.png";
import javaIcon from "../../assets/icons/icons8-java-96.png";
import cIcon from "../../assets/icons/icons8-c-96.png";
import tensorflowIcon from "../../assets/icons/icons8-tensorflow-96.png";
import reactIcon from "../../assets/stack/React.png";

const SkillIcon = ({ name, size = 29, className = "" }) => {
  const iconMap = {
    // SVG icons
    docker: dockerIcon,
    git: gitIcon,
    github: githubIcon,
    javascript: javascriptIcon,
    js: javascriptIcon,
    nodejs: nodejsIcon,
    node: nodejsIcon,
    langgraph: Langgraph,
    langchain: Langchain,
    crewai: Crewai,
    // PNG icons
    python: pythonIcon,
    java: javaIcon,
    "c++": cIcon,
    cpp: cIcon,
    c: cIcon,
    tensorflow: tensorflowIcon,
    reactjs: reactIcon,
    react: reactIcon,
  };

  const iconSrc = iconMap[name.toLowerCase()];

  if (iconSrc) {
    return (
      <img
        src={iconSrc}
        alt={name}
        width={size}
        height={size}
        className={className}
        style={{ objectFit: "contain" }}
      />
    );
  }

  // Fallback to emoji if no icon found
  const emojiMap = {
    langchain: "🔗",
    langgraph: "📊",
    crewai: "🤖",
    regression: "📈",
    classification: "🏷️",
    anns: "🧬",
    cnns: "🖼️",
  };

  return (
    <span style={{ fontSize: `${size}px` }}>
      {emojiMap[name.toLowerCase()] || "🔧"}
    </span>
  );
};

export default SkillIcon;
