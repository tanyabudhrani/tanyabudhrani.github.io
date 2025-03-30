import React from "react";
import { Typewriter } from 'react-simple-typewriter'; // 🔥 Add at top of file
import { motion } from "framer-motion";
import CustomCursor from "./components/CustomCursor"; // 👈 Add this at the top
import './App.css';


// Import your components
import About from "./components/About";
import Hero from "./components/Hero";
import Experience from './components/Experience';
import Projects from './components/Projects';
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center h-screen text-white text-3xl font-bold"
        >
          <div className="flex items-center space-x-3 text-4xl sm:text-5xl font-extrabold">
            <span className="text-cyan-400">{'{'}</span>
            <Typewriter
              words={['Tanya Budhrani']}
              typeSpeed={80}
              deleteSpeed={0}
              delaySpeed={1000}
              cursor
              cursorStyle="|"
            />
            <span className="text-cyan-400">{'}'}</span>
          </div>
        </motion.div>
      </div>
    );
  } else {
    return (
      <div className="bg-primary w-full overflow-hidden">
        <CustomCursor /> {/* 👈 This stays here */}
    
        {/* A div to wrap the entire application with a gradient background */}
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