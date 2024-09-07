import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Extracurriculars from './components/Extracurriculars';
import Writing from './components/Writing';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/extracurriculars" element={<Extracurriculars />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/" element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;
