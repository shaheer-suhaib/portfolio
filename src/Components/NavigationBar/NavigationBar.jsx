import React, { useEffect, useState } from "react";
import "./NavigationBar.css";
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
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHomePage = location.pathname === "/";

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (
      location.pathname === "/projects" ||
      location.pathname.startsWith("/projects/") ||
      location.pathname === "/engineered-projects"
    ) {
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
    <motion.div
      className={`navBar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-content-wrapper">
        <div className="hamburger" onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className="nav-menue desktop-only">
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {isHomePage ? (
                item.id === "portfolio" ? (
                  <div
                    className="AnchorLink"
                    onClick={() => {
                      setMenue(item.id);
                      const element = document.getElementById("work");
                      if (element) {
                        window.scrollTo({
                          top: element.offsetTop,
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
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
                <div
                  className="AnchorLink"
                  onClick={() => handleNavClick(item)}
                >
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

        <motion.button
          className="nav-resume"
          onClick={handleResumeDownload}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Resume
        </motion.button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <div
                key={item.id}
                className="mobile-item"
                onClick={() => {
                  toggleMobileMenu();
                  handleNavClick(item);
                }}
              >
                {item.label}
              </div>
            ))}

            <button
              className="mobile-resume"
              onClick={() => {
                toggleMobileMenu();
                handleResumeDownload();
              }}
            >
              Resume
            </button>
          </motion.div>
        )}
      </AnimatePresence>

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
