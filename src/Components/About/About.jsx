import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "../../hooks/useCountUp";
import "./About.css";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experienceCount = useCountUp(isInView ? 10 : 0, 2000);
  const projectsCount = useCountUp(isInView ? 90 : 0, 2000);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
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
      <motion.div className="img" variants={itemVariants}>
        <motion.img
          src=".\images\face.png"
          alt=""
          whileHover={{ scale: 1.05, rotate: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.div>
      <div className="about-right">
        <motion.div className="details" variants={itemVariants}>
          <p>
            I'm a software engineer based in pakistan and graduated from Nust
            university, Currently working on Agentic Ai projects and Keeping me
            up to date with industry demands
          </p>
        </motion.div>
        <motion.div className="skills" variants={itemVariants}>
          {["Html&Css", "React Js", "LangGraph", "CrewAi"].map((skill, i) => (
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
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h1>{experienceCount}+</h1>
            <p>Years of Experience</p>
          </motion.div>
          <hr />
          <motion.div
            className="experience-type"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h1>{projectsCount}+</h1>
            <p>Projects Completed</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
