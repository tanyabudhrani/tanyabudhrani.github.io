import React from "react";
import { motion } from "framer-motion";

// Import your components
import About from "./components/About";
import Hero from "./components/Hero";
import Experience from './components/Experience';
import Projects from './components/Projects';
import Project2 from './components/Project2';
import Contact from './components/Contact';
import Extracurriculars from './components/Extracurriculars';
import Writing from './components/Writing';
import Navbar from './components/Navbar';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  // Simulate loading effect
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1600); // Adjust the duration as per your preference
  }, []);

  if (isLoading) {
    return (
      <div className="bg-primary w-full overflow-hidden">
        <div className="flex items-center justify-center h-screen">
          <img src="/assets/lg512.png" alt="Loading Icon" className="w-50 h-50" />
        </div>
      </div>
    );
  } else {
    return (
      // A div to wrap the entire application with a gradient background
      <div className="bg-primary w-full overflow-hidden">
        <motion.section
          initial={{ x: -100, opacity: 0.25 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* Navbar and Home Section */}
          <div className="bg-primary flex justify-center items-center">
            <div className="w-full max-w-screen-xl">
              <Navbar />
              <Hero />
              <About />
            </div>
          </div>

          {/* Experience and Education Section */}
          <div className="bg-primary flex justify-center px-6">
            <div className="w-full max-w-screen-xl">
              <Experience />
              {/*<Education /> */}
            </div>
          </div>

          {/* Projects, Writing, and Extracurriculars Section */}
          <div className="bg-primary flex justify-center px-6">
            <div className="w-full max-w-screen-xl">
              <Projects />
              <Project2 /> {/* Add more projects as needed */}
              <Writing />
              <Extracurriculars />
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-primary w-full max-w-screen-xl">
            <Contact />
          </div>
        </motion.section>
      </div>
    );
  }
};

export default App;