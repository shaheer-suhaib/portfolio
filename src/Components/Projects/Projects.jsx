import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import CustomCursor from "../CustomCursor/CustomCursor";
import ParticleBackground from "../ParticleBackground/ParticleBackground";
import ScrollProgress from "../ScrollProgress/ScrollProgress";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";
import "./Projects.css";
import work_data from "../../assets/mywork_data.js";
import { ArrowLeft, ExternalLink } from "lucide-react";

const Projects = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <>
      <CustomCursor />
      <ParticleBackground />
      <ScrollProgress />
      <NavigationBar />
      <motion.div
        className="projects-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
      <motion.button
        className="back-button"
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <ArrowLeft size={20} />
        <span>Back to Home</span>
      </motion.button>

      <motion.div
        className="projects-container"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="projects-title"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          All Projects
        </motion.div>

        <div className="projects-grid">
          {work_data.map((project, index) => (
            <motion.div
              key={project.w_no}
              className="project-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleProjectClick(project.w_no)}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.w_img}
                  alt={project.w_name}
                  className="project-card-image"
                />
                <div className="project-overlay">
                  <motion.button
                    className="view-details-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    View Details
                    <ExternalLink size={18} />
                  </motion.button>
                </div>
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">{project.w_name}</h3>
                <p className="project-card-description">{project.description}</p>
                <div className="project-card-meta">
                  <span className="project-meta-item">
                    <span className="meta-label">Timeline:</span> {project.timeline}
                  </span>
                  <span className="project-meta-item">
                    <span className="meta-label">Association:</span> {project.association}
                  </span>
                </div>
                <div className="project-card-skills">
                  {project.skills.slice(0, 3).map((skill, idx) => (
                    <span key={idx} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                  {project.skills.length > 3 && (
                    <span className="skill-tag more">+{project.skills.length - 3} more</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Projects;

