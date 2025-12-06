import React, { useEffect, useState } from "react";
import "./NavigationBar.css";
import { motion, AnimatePresence } from "framer-motion";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/shaheer-resume.pdf";

const NavigationBar = () => {
  const [menue, setMenue] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showDownloadMessage, setShowDownloadMessage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "shaheer-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setShowDownloadMessage(true);
    setTimeout(() => {
      setShowDownloadMessage(false);
    }, 3000);
  };

  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About Me", href: "#about", offset: 50 },
    { id: "portfolio", label: "Portfolio", href: "#work" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <motion.div
      className={`navBar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <ul className="nav-menue">
        {navItems.map((item) => (
          <motion.li
            key={item.id}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <AnchorLink
              className="AnchorLink"
              href={item.href}
              offset={item.offset || 0}
            >
              <p onClick={() => setMenue(item.id)}>{item.label}</p>
            </AnchorLink>
            {menue === item.id && (
              <motion.img
                src={underline}
                alt=""
                layoutId="underline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.li>
        ))}
      </ul>
      <motion.div
        className="nav-connect"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Connect With Me
      </motion.div>
      <motion.button
        className="nav-resume"
        onClick={handleResumeDownload}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Resume
      </motion.button>
      <AnimatePresence>
        {showDownloadMessage && (
          <motion.div
            className="download-message"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            Resume Downloaded!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavigationBar;
