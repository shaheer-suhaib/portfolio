import { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
import ScrollProgress from "./Components/ScrollProgress/ScrollProgress";
import ParticleBackground from "./Components/ParticleBackground/ParticleBackground";
import CustomCursor from "./Components/CustomCursor/CustomCursor";
import Projects from "./Components/Projects/Projects";
import ProjectsDetail from "./Components/ProjectsDetail/ProjectsDetail";
import EngineeredProjects from "./Components/EngineeredProjects/EngineeredProjects";
import { AnimatePresence } from "framer-motion";
import Experience from "./Components/Skill&Experience/experience";


function HomePage() {
  return (
    <>
      <CustomCursor />
      <ParticleBackground />
      <ScrollProgress />
      <NavigationBar />
      <Hero />
      <About />
      <MyWork />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // #region agent log
  const logResizeRef = useRef(null);
  useEffect(() => {
    const logResponsiveness = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const data = { viewportW: vw, viewportH: vh };
      const navLink = document.querySelector(".nav-menue p");
      if (navLink) {
        const cs = getComputedStyle(navLink);
        data.navLinkFontSize = cs.fontSize;
        data.hypothesisId = "A";
      }
      const details = document.querySelector(".details");
      if (details) {
        const cs = getComputedStyle(details);
        data.detailsFontSize = cs.fontSize;
        data.hypothesisId = (data.hypothesisId ? data.hypothesisId + ",B" : "B");
        if (!data.hypothesisId) data.hypothesisId = "B";
      }
      const uniLogo = document.querySelector(".university-logo");
      if (uniLogo) {
        const cs = getComputedStyle(uniLogo);
        data.universityLogoWidth = cs.width;
        if (!data.hypothesisId) data.hypothesisId = "B"; else if (!data.hypothesisId.includes("B")) data.hypothesisId += ",B";
      }
      const expDesc = document.querySelector(".experience-card .description");
      if (expDesc) {
        const cs = getComputedStyle(expDesc);
        data.experienceDescFontSize = cs.fontSize;
        data.hypothesisId = (data.hypothesisId || "") + (data.hypothesisId ? ",C" : "C");
      }
      const contactComing = document.querySelector(".contact-coming");
      if (contactComing) {
        const cs = getComputedStyle(contactComing);
        data.contactComingFontSize = cs.fontSize;
        data.hypothesisId = (data.hypothesisId || "") + (data.hypothesisId ? ",D" : "D");
      }
      const navWrapper = document.querySelector(".nav-content-wrapper");
      if (navWrapper) {
        const cs = getComputedStyle(navWrapper);
        data.navWrapperMaxWidth = cs.maxWidth;
        data.hypothesisId = (data.hypothesisId || "") + (data.hypothesisId ? ",E" : "E");
      }
      if (!data.hypothesisId) return;
      fetch("http://127.0.0.1:7242/ingest/5a4e1890-7358-44db-b614-54c616fd0315", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "App.jsx:logResponsiveness", message: "responsiveness computed styles", data, timestamp: Date.now(), sessionId: "debug-session", hypothesisId: data.hypothesisId }) }).catch(() => {});
    };
    const run = () => {
      if (logResizeRef.current) clearTimeout(logResizeRef.current);
      logResizeRef.current = setTimeout(() => requestAnimationFrame(logResponsiveness), 300);
    };
    run();
    const delayedRun = setTimeout(run, 2500);
    window.addEventListener("resize", run);
    return () => { window.removeEventListener("resize", run); clearTimeout(delayedRun); if (logResizeRef.current) clearTimeout(logResizeRef.current); };
  }, [isLoading, location.pathname]);
  // #endregion

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      {!isLoading && (
        <>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectsDetail />} />
              <Route path="/engineered-projects" element={<EngineeredProjects />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default App;
