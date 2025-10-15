import { useState } from "react";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <About />
      <MyWork />
      <Contact />
      <Footer /> 
      
    </>
  );
}

export default App;
