import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-opacity duration-500 ${
        isScrolled ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-lg font-bold">
          Tanya Budhrani
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white text-sm">
          <a href="#home" className="text-white hover:text-blue-300">Home</a>
          <a href="#about" className="text-white hover:text-blue-300">About</a>
          <a href="#experience" className="text-white hover:text-blue-300">Experience</a>
          <a href="#projects" className="text-white hover:text-blue-300">Projects</a>
          <a href="#extracurriculars" className="text-white hover:text-blue-300">Extracurriculars</a>
          <a href="https://tanyasthoughts.netlify.app/" className="text-white hover:text-blue-300">Writing</a>
          <a href="#contact" className="text-white hover:text-blue-300">Contact</a>
        </div>

        {/* Minimal Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Small Minimal Dropdown (no black background) */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-end pr-8 pb-4 space-y-3 text-white text-sm">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#extracurriculars" onClick={closeMenu}>Extracurriculars</a>
          <a href="https://tanyasthoughts.netlify.app/" onClick={closeMenu}>Writing</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
