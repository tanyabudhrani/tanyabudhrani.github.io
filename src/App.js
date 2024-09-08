import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Extracurriculars from './components/Extracurriculars';
import Writing from './components/Writing';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className ="bg-gradient-to-b from-gray-900 via-teal-900 to-black">"
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Extracurriculars />
      <Writing />
      <Contact />
    </div>
  );
}

export default App;
