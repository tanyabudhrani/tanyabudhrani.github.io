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

  // Lock body scroll when menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed w-full top-0 z-50 bg-black transition-opacity duration-500 ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-white text-lg sm:text-xl font-bold">
            Tanya Budhrani
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-white text-sm lg:text-base">
            <a href="#home" className="hover:text-gray-300 transition">Home</a>
            <a href="#about" className="hover:text-gray-300 transition">About</a>
            <a href="#experience" className="hover:text-gray-300 transition">Experience</a>
            <a href="#projects" className="hover:text-gray-300 transition">Projects</a>
            <a href="#extracurriculars" className="hover:text-gray-300 transition">Extracurriculars</a>
            <a href="https://tanyasthoughts.netlify.app/" className="hover:text-gray-300 transition">Writing</a>
            <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-white text-3xl z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* BACKDROP */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* SIDE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black shadow-2xl z-50 transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col px-8 pt-20 space-y-6 text-white text-base">
          <a href="#home" onClick={closeMenu} className="hover:text-gray-300">Home</a>
          <a href="#about" onClick={closeMenu} className="hover:text-gray-300">About</a>
          <a href="#experience" onClick={closeMenu} className="hover:text-gray-300">Experience</a>
          <a href="#projects" onClick={closeMenu} className="hover:text-gray-300">Projects</a>
          <a href="#extracurriculars" onClick={closeMenu} className="hover:text-gray-300">Extracurriculars</a>
          <a href="https://tanyasthoughts.netlify.app/" onClick={closeMenu} className="hover:text-gray-300">Writing</a>
          <a href="#contact" onClick={closeMenu} className="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
