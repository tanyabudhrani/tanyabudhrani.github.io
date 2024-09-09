// import Home from './components/Home';
// import About from './components/About';
// import Skills from './components/Skills';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Extracurriculars from './components/Extracurriculars';
// import Writing from './components/Writing';
// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <div className ="bg-gradient-to-b from-gray-900 via-teal-900 to-black">"
//       <Navbar />
//       <Home />
//       <About />
//       <Skills />
//       <Experience />
//       <Projects />
//       <Extracurriculars />
//       <Writing />
//       <Contact />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { motion } from "framer-motion";

// Import your components
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
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
        {/* You can replace Loading with an actual loading component */}
        <div className="text-white flex items-center justify-center h-screen">Loading...</div>
      </div>
    );
  } else {
    return (
      // A div to wrap the entire application with a gradient background
      <div className="bg-gradient-to-b from-gray-900 via-teal-900 to-black w-full overflow-hidden">
        <motion.section
          initial={{ x: -100, opacity: 0.25 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Navbar and Home Section */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-screen-xl">
              <Navbar />
              <Home />
            </div>
          </div>

          {/* About and Skills Section */}
          <div className="bg-primary flex justify-start">
            <div className="w-full max-w-screen-xl">
              <About />
              <Skills />
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
          <div className="w-full max-w-screen-xl">
            <Contact />
          </div>
        </motion.section>
      </div>
    );
  }
};

export default App;
