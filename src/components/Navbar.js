import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Tanya Budhrani</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/skills" className="hover:text-blue-400">Skills</Link>
          <Link to="/experience" className="hover:text-blue-400">Experience</Link>
          <Link to="/projects" className="hover:text-blue-400">Projects</Link>
          <Link to="/extracurriculars" className="hover:text-blue-400">Extracurriculars</Link>
          <Link to="/writing" className="hover:text-blue-400">Writing</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

