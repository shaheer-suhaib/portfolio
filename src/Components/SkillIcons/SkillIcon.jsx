import React from "react";
import { Database, Server } from "lucide-react";

import Langgraph from "../../assets/langgrapg.svg";
import Langchain from "../../assets/Langchain.svg";
import Crewai from "../../assets/crewai.png";

// SVG icons from stack folders
import dockerIcon from "../../assets/Images/stack/Docker.svg";
import gitIcon from "../../assets/stack/Git.svg";
import githubIcon from "../../assets/stack/Github.svg";
import javascriptIcon from "../../assets/stack/Javascript.svg";
import nodejsIcon from "../../assets/stack/NodeJs.svg";
import htmlIcon from "../../assets/Images/stack/HTML.png";
import cssIcon from "../../assets/Images/stack/CSS.png";
import expressIcon from "../../assets/Images/stack/Express.png";
import mongodbIcon from "../../assets/stack/MongoDB.svg";
import vercelIcon from "../../assets/stack/Vercel.svg";
import cppIcon from "../../assets/Images/stack/cpp.svg";
import mysqlIcon from "../../assets/mysql-logo-svgrepo-com.svg";
import supabaseIcon from "../../assets/supabase-logo-icon.svg";
import azureIcon from "../../assets/azure-icon-svgrepo-com.svg";
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
    "c++": cppIcon,
    cpp: cIcon,
    c: cIcon,
    tensorflow: tensorflowIcon,
    reactjs: reactIcon,
    react: reactIcon,
    "react.js": reactIcon,
    html5: htmlIcon,
    html: htmlIcon,
    css3: cssIcon,
    css: cssIcon,
    "node.js": nodejsIcon,
    "express.js": expressIcon,
    express: expressIcon,
    mongodb: mongodbIcon,
    mysql: mysqlIcon,
    supabase: supabaseIcon,
    vercel: vercelIcon,
    "microsoft azure": azureIcon,
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

  const fallbackIconMap = {
    "sql server": Database,
    redis: Database,
    render: Server,
  };
  const FallbackIcon = fallbackIconMap[name.toLowerCase()] || Server;

  return (
    <FallbackIcon
      aria-label={name}
      className={className}
      size={size}
      strokeWidth={1.8}
    />
  );
};

export default SkillIcon;
