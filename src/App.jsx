import { useState } from "react";
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
import { AnimatePresence } from "framer-motion";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      {!isLoading && (
        <>
          <CustomCursor />
          <ParticleBackground />
          <ScrollProgress />
          <NavigationBar />
          <Hero />
          <About />
          <MyWork />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
