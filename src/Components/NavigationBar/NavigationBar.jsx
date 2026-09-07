import { useEffect, useState } from "react";
import "./NavigationBar.css";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

const RESUME_URL = import.meta.env.VITE_RESUME_URL;
const RESUME_DOWNLOAD_URL = import.meta.env.VITE_RESUME_DOWNLOAD_URL;

const navItems = [
  { id: "about", label: "About", href: "#about" },
  { id: "portfolio", label: "Work", href: "#work" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const NavigationBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showDownloadMessage, setShowDownloadMessage] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the section currently in view rather than the last one clicked.
  useEffect(() => {
    if (!isHomePage) {
      setActive(
        location.pathname.startsWith("/projects") ||
          location.pathname === "/engineered-projects"
          ? "portfolio"
          : "home"
      );
      return;
    }

    const ids = ["home", "about", "work", "experience", "contact"];
    const toNav = { home: "home", about: "about", work: "portfolio", experience: "experience", contact: "contact" };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(toNav[visible.target.id] ?? "home");
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHomePage, location.pathname]);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleResumeDownload = () => {
    if (RESUME_URL) window.open(RESUME_URL, "_blank", "noopener");
    if (RESUME_DOWNLOAD_URL) {
      const link = document.createElement("a");
      link.href = RESUME_DOWNLOAD_URL;
      link.download = "shaheer-suhaib-resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
    setShowDownloadMessage(true);
    setTimeout(() => setShowDownloadMessage(false), 3000);
  };

  const goToSection = (item) => {
    setActive(item.id);
    navigate(`/${item.href}`);
  };

  return (
    <>
      <motion.header
        className={`nav ${scrolled ? "nav--scrolled" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container nav__inner">
          <a
            className="nav__brand"
            href="/"
            onClick={(e) => { e.preventDefault(); navigate("/"); window.scrollTo({ top: 0 }); }}
          >
            <span className="nav__mark">SS</span>
            <span className="nav__brandName">Shaheer Suhaib</span>
          </a>

          <nav className="nav__links" aria-label="Primary">
            {navItems.map((item) => {
              const cls = `nav__link ${active === item.id ? "is-active" : ""}`;
              return isHomePage ? (
                <AnchorLink key={item.id} className={cls} href={item.href}>
                  {item.label}
                </AnchorLink>
              ) : (
                <button
                  key={item.id}
                  type="button"
                  className={cls}
                  onClick={() => goToSection(item)}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="nav__actions">
            <button className="btn btn-ghost nav__cta" onClick={handleResumeDownload} type="button">
              Résumé <span aria-hidden="true">&#8599;</span>
            </button>
            <button
              className={`nav__burger ${mobileOpen ? "is-open" : ""}`}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              type="button"
            >
              <span /><span />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="nav__scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="nav__drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="eyebrow">Menu</p>
              {navItems.map((item) =>
                isHomePage ? (
                  <AnchorLink
                    key={item.id}
                    className="nav__drawerLink"
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </AnchorLink>
                ) : (
                  <button
                    key={item.id}
                    type="button"
                    className="nav__drawerLink"
                    onClick={() => { setMobileOpen(false); goToSection(item); }}
                  >
                    {item.label}
                  </button>
                )
              )}
              <button
                className="btn btn-ghost nav__drawerCta"
                onClick={() => { setMobileOpen(false); handleResumeDownload(); }}
                type="button"
              >
                Résumé <span aria-hidden="true">&#8599;</span>
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showDownloadMessage && (
          <motion.div
            className="nav__toast"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            role="status"
          >
            Résumé opened &amp; downloaded
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationBar;
