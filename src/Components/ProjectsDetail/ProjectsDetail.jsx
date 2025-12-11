import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import CustomCursor from "../CustomCursor/CustomCursor";
import ParticleBackground from "../ParticleBackground/ParticleBackground";
import ScrollProgress from "../ScrollProgress/ScrollProgress";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";
import "./ProjectsDetail.css";
import work_data from "../../assets/mywork_data.js";
import Icon from "../Icons/Icon";

const ProjectsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = work_data.find((p) => p.w_no === parseInt(id));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="project-not-found">
        <h1>Project Not Found</h1>
        <button onClick={() => navigate("/")}>Go Back Home</button>
      </div>
    );
  }

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <CustomCursor />
      <ParticleBackground />
      <ScrollProgress />
      <NavigationBar />
      <motion.div
        className="projects-detail"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
      {/* Back Button */}
      <motion.button
        className="back-button"
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Icon name="arrowLeft" size={20} />
        <span>Back to Home</span>
      </motion.button>

      {/* Hero Section */}
      <motion.div
        className="project-hero"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="project-image-container" variants={itemVariants}>
          <motion.img
            src={project.w_img}
            alt={project.w_name}
            className="project-hero-image"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div className="project-hero-content" variants={itemVariants}>
          <motion.h1
            className="project-title"
            variants={itemVariants}
          >
            {project.w_name}
          </motion.h1>
          <motion.p className="project-description" variants={itemVariants}>
            {project.fullDescription}
          </motion.p>

          {/* Quick Info Cards */}
          <motion.div className="quick-info-grid" variants={itemVariants}>
            <motion.div
              className="info-card"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Icon name="calendar" size={24} />
              <div>
                <p className="info-label">Start Date</p>
                <p className="info-value">{project.startDate}</p>
              </div>
            </motion.div>

            <motion.div
              className="info-card"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Icon name="calendar" size={24} />
              <div>
                <p className="info-label">End Date</p>
                <p className="info-value">{project.endDate}</p>
              </div>
            </motion.div>

            <motion.div
              className="info-card"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Icon name="clock" size={24} />
              <div>
                <p className="info-label">Timeline</p>
                <p className="info-value">{project.timeline}</p>
              </div>
            </motion.div>

            <motion.div
              className="info-card"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Icon name="building" size={24} />
              <div>
                <p className="info-label">Association</p>
                <p className="info-value">{project.association}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Links */}
          <motion.div className="project-links" variants={itemVariants}>
            {project.links.live && (
              <motion.a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="link-button live"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon name="externalLink" size={18} />
                <span>Live Demo</span>
              </motion.a>
            )}
            {project.links.github && (
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-button github"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon name="github" size={18} />
                <span>View Code</span>
              </motion.a>
            )}
            {project.links.demo && (
              <motion.a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="link-button demo"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon name="externalLink" size={18} />
                <span>Demo</span>
              </motion.a>
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="project-content">
        {/* Story Section */}
        {/* <motion.section
          className="content-section story-section"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">
            <span className="title-icon">📖</span>
            Project Story
          </h2>
          <p className="story-text">{project.story}</p>
        </motion.section> */}

        {/* Skills Section */}
        {/* <motion.section
          className="content-section skills-section"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">
            <span className="title-icon">🛠️</span>
            Skills Learned
          </h2>
          <div className="skills-grid">
            {project.skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-badge"
                whileHover={{ scale: 1.1, y: -5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.section> */}

        {/* Technologies Section */}
        <motion.section
          className="content-section technologies-section"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">
            <span className="title-icon">⚙️</span>
            Technologies Used
          </h2>
          <div className="technologies-grid">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="tech-card"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Subjects Section */}
        {/* <motion.section
          className="content-section subjects-section"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">
            <Icon name="book" size={24} className="title-icon-svg" />
            Subjects Applied
          </h2>
          <div className="subjects-list">
            {project.subjects.map((subject, index) => (
              <motion.div
                key={index}
                className="subject-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <div className="subject-bullet"></div>
                <span>{subject}</span>
              </motion.div>
            ))}
          </div>
        </motion.section> */}

        {/* Timeline Section */}
        <motion.section
          className="content-section timeline-section"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">
            <span className="title-icon">📅</span>
            Project Timeline
          </h2>
          <div className="timeline-container">
            <div className="timeline-line"></div>
            <div className="timeline-items">
              <motion.div
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Project Start</h3>
                  <p>{project.startDate}</p>
                </div>
              </motion.div>
              <motion.div
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Development Period</h3>
                  <p>{project.timeline}</p>
                </div>
              </motion.div>
              <motion.div
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Project Completion</h3>
                  <p>{project.endDate}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default ProjectsDetail;

