import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      if (
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'A' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.closest('.work-img') ||
        e.target.closest('.skill-name') ||
        e.target.closest('.project-card') ||
        e.target.closest('.show-more') ||
        e.target.closest('.nav-connect') ||
        e.target.closest('.nav-resume') ||
        e.target.closest('.connect-me') ||
        e.target.closest('.resume')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      if (
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'A' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.closest('.work-img') ||
        e.target.closest('.skill-name') ||
        e.target.closest('.project-card') ||
        e.target.closest('.show-more') ||
        e.target.closest('.nav-connect') ||
        e.target.closest('.nav-resume') ||
        e.target.closest('.connect-me') ||
        e.target.closest('.resume')
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      <motion.div
        className={`cursor-dot ${isHovering ? 'hover' : ''}`}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 10,
          mass: 0.5,
        }}
      />
      <motion.div
        className={`cursor-outline ${isHovering ? 'hover' : ''}`}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 10,
          mass: 0.8,
        }}
      />
    </>
  );
};

export default CustomCursor;