import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Footer.css'

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      className="footer"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-content">
        <motion.div
          className="footer-left"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3>Portfolio</h3>
          <p>Software Engineer based in Pakistan</p>
        </motion.div>
        <div className="footer-right">
          <motion.div
            className="footer-links"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <AnchorLink href="#home">Home</AnchorLink>
            <AnchorLink href="#about">About</AnchorLink>
            <AnchorLink href="#work">Portfolio</AnchorLink>
            <AnchorLink href="#contact">Contact</AnchorLink>
          </motion.div>
          <motion.div
            className="footer-bottom"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Footer