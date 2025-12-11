import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "../../hooks/useCountUp";
import "./About.css";
import nust_img from "../../assets/NUST.png";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projectsCount = useCountUp(isInView ? 90 : 0, 2000);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <motion.div
      id="about"
      className="About"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        className="about-title"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
      >
        About me
      </motion.div>

      <div className="about-content-wrapper">
        <motion.div className="img" variants={itemVariants}>
          <motion.img
            src="/images/side_img.png"
            alt="About me"
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        <div className="about-right">
          <motion.div className="details" variants={itemVariants}>
            <p>
            I am a passionate and curious learner currently navigating the exciting world of engineering and software development. I love exploring new technologies — from embedded systems and machine learning to full-stack and app development — and bringing ideas to life through hands-on projects.

            </p>
          </motion.div>

          <motion.div className="skills" variants={itemVariants}>
            {["Html&Css", "React", "LangGraph", "CrewAi", "LangChain","TensorFlow","Python","Java","C++","Git","GitHub","Docker"  ].map((skill, i) => (
              <motion.div
                key={skill}
                className="skill-name"
                custom={i}
                variants={skillVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="experience" variants={itemVariants}>
            <motion.div
              className="experience-type"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={nust_img}
                alt="NUST Logo"
                className="university-logo"
              />
              <p>National University of Sciences and Technology</p>
            </motion.div>

            <hr />

            <motion.div
              className="experience-type"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h1>CS</h1>
              <p>Projects Completed</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
