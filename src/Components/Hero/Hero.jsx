import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "I'm software engineer based in pakistan";
  const gradientText = "I'm software engineer";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      id="home"
      className="hero-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="img" variants={itemVariants}>
        <motion.img
          src=".\images\face.png"
          alt=""
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.div>
      <motion.h1 variants={itemVariants}>
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          I'm software engineer
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          {displayText.slice(gradientText.length)}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            className="cursor-blink"
          >
            |
          </motion.span>
        </motion.span>
      </motion.h1>
      <motion.div className="hero-connect" variants={itemVariants}>
        <motion.div
          className="connect-me"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Connect With Me
        </motion.div>
        <motion.div
          className="resume"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          My Resume
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
