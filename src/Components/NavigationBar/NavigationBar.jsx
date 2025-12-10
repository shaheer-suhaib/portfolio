import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/shaheer-resume.pdf";

const NavigationBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menue, setMenue] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showDownloadMessage, setShowDownloadMessage] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Update active menu based on current route
  useEffect(() => {
    if (location.pathname === "/projects" || location.pathname.startsWith("/projects/") || location.pathname === "/engineered-projects") {
      setMenue("portfolio");
    } else if (location.pathname === "/") {
      if (location.hash) {
        const hash = location.hash.substring(1);
        if (hash === "home") setMenue("home");
        else if (hash === "about") setMenue("about");
        else if (hash === "work") setMenue("portfolio");
        else if (hash === "contact") setMenue("contact");
      } else {
        setMenue("home");
      }
    }
  }, [location.pathname, location.hash]);

  // Handle scrolling to section after navigation
  useEffect(() => {
    if (location.hash && isHomePage) {
      const hash = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const offset = hash === "about" ? 50 : 0;
          window.scrollTo({
            top: element.offsetTop - offset,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [location.hash, isHomePage]);

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

  const handleNavClick = (item) => {
    setMenue(item.id);
    setMobileMenuOpen(false);
    
    if (item.id === "portfolio") {
      navigate("/projects");
      return;
    }

    if (item.id === "home") {
      navigate("/");
      return;
    }

    navigate(`/${item.href}`);
  };

  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About Me", href: "#about", offset: 50 },
    { id: "portfolio", label: "Portfolio", href: "#work" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.div
        className={`navBar ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Desktop Navigation */}
        <ul className="nav-menue desktop-menu">
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {isHomePage ? (
                item.id === "portfolio" ? (
                  <div className="AnchorLink" onClick={() => {
                    setMenue(item.id);
                    const element = document.getElementById("work");
                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop,
                        behavior: "smooth",
                      });
                    }
                  }}>
                    <p>{item.label}</p>
                  </div>
                ) : (
                  <AnchorLink
                    className="AnchorLink"
                    href={item.href}
                    offset={item.offset || 0}
                  >
                    <p onClick={() => setMenue(item.id)}>{item.label}</p>
                  </AnchorLink>
                )
              ) : (
                <div className="AnchorLink" onClick={() => handleNavClick(item)}>
                  <p>{item.label}</p>
                </div>
              )}
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

        {/* Desktop Buttons */}
        <div className="desktop-buttons">
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
        </div>

        {/* Mobile Hamburger */}
        <button 
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <ul className="mobile-nav-items">
              {navItems.map((item) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {isHomePage ? (
                    item.id === "portfolio" ? (
                      <div className="mobile-link" onClick={() => {
                        setMenue(item.id);
                        setMobileMenuOpen(false);
                        const element = document.getElementById("work");
                        if (element) {
                          window.scrollTo({
                            top: element.offsetTop,
                            behavior: "smooth",
                          });
                        }
                      }}>
                        <p>{item.label}</p>
                        {menue === item.id && <span className="active-indicator">•</span>}
                      </div>
                    ) : (
                      <AnchorLink
                        className="mobile-link"
                        href={item.href}
                        offset={item.offset || 0}
                        onClick={() => {
                          setMenue(item.id);
                          setMobileMenuOpen(false);
                        }}
                      >
                        <p>{item.label}</p>
                        {menue === item.id && <span className="active-indicator">•</span>}
                      </AnchorLink>
                    )
                  ) : (
                    <div className="mobile-link" onClick={() => handleNavClick(item)}>
                      <p>{item.label}</p>
                      {menue === item.id && <span className="active-indicator">•</span>}
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>
            <div className="mobile-menu-buttons">
              <motion.div
                className="nav-connect"
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Connect With Me
              </motion.div>
              <motion.button
                className="nav-resume"
                onClick={() => {
                  handleResumeDownload();
                  setMobileMenuOpen(false);
                }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Download Message */}
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
    </>
  );
};

export default NavigationBar;