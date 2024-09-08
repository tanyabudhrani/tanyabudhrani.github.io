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
  const [isLoading,setIsLoading] = React.useState(true);

  React.useEffect(()=>{
    setTimeout(()=>{setIsLoading(false)},1600);
  },[])

  if(isLoading){
    return (
      <div className="bg-primary w-full overflow-hidden">
        <Loading/>
      </div>
    )
  }else{
    return (
      // A div to wrap the entire application
    <div className="bg-primary w-full overflow-hidden">
      <motion.section
        initial={{ x: -100, opacity: 0.25 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
            <Home />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <About />
            <Skills />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <Experience />
            <Education />
          </div>
        </div>
        <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <Projects />
            <Writing />
            <Extracurriculars />
          </div>
        </div>
        <Contact />
      </motion.section>
    </div>

    );
  }
};

export default App;