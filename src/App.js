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
    <div>
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
