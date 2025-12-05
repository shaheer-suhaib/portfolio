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
        e.target.closest('.skill-name')
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
        e.target.closest('.skill-name')
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
        className="cursor-dot"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      <motion.div
        className={`cursor-outline ${isHovering ? 'hover' : ''}`}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      />
    </>
  );
};

export default CustomCursor;

