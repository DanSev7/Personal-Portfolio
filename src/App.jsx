import React from "react";
import Hero from "./sections/Hero";
// import Header from "./components/Header";
import Navigation from "./components/Navigation";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* <Header /> */}
      <Navigation />
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <About />
      {/* Skills Section */}
      <Skills />
      {/* Projects Section */}
      <Projects />
      {/* Experience Section */}
      <Experience />
      {/* Certifications Section */}
      <Certifications />
      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
