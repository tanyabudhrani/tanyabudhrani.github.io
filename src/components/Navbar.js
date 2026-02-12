import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) { // Adjust the scroll distance as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-dark p-4 fixed w-full top-0 z-10 transition-all ease-in-out duration-500 ${
        isScrolled ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold text-white">Tanya Budhrani</h1>
        <div className="space-x-6">
          <a href="#home" className="text-white hover:text-blue-400">Home</a>
          <a href="#about" className="text-white hover:text-blue-400">About</a>
          <a href="#experience" className="text-white hover:text-blue-400">Experience</a>
          <a href="#projects" className="text-white hover:text-blue-400">Projects</a>
          <a href="#extracurriculars" className="text-white hover:text-blue-400">Extracurriculars</a>
          <a href="https://tanyasthoughts.netlify.app/" className="text-white hover:text-blue-400">Writing</a>
          <a href="#contact" className="text-white hover:text-blue-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;