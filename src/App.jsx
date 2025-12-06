import { useState } from "react";
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
            </Routes>
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default App;
