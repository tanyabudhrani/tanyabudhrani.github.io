// import React, { useState, useEffect } from 'react';

// function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY > 100) { // Adjust the scroll distance as needed
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <nav
//       className={`bg-dark p-4 fixed w-full top-0 z-10 transition-all ease-in-out duration-500 ${
//         isScrolled ? 'opacity-0' : 'opacity-100'
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-lg font-bold text-white">Tanya Budhrani</h1>
//         <div className="flex flex-wrap justify-between items-center px-6">
//           <a href="#home" className="text-white hover:text-blue-400">Home</a>
//           <a href="#about" className="text-white hover:text-blue-400">About</a>
//           <a href="#experience" className="text-white hover:text-blue-400">Experience</a>
//           <a href="#projects" className="text-white hover:text-blue-400">Projects</a>
//           <a href="#extracurriculars" className="text-white hover:text-blue-400">Extracurriculars</a>
//           <a href="https://tanyasthoughts.netlify.app/" className="text-white hover:text-blue-400">Writing</a>
//           <a href="#contact" className="text-white hover:text-blue-400">Contact</a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

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
      className={`fixed w-full top-0 z-50 bg-dark transition-all duration-500 ${
        isScrolled ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-lg sm:text-xl font-bold text-white">
          Tanya Budhrani
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white text-sm lg:text-base">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#extracurriculars" className="hover:text-blue-400 transition">Extracurriculars</a>
          <a href="https://tanyasthoughts.netlify.app/" className="hover:text-blue-400 transition">Writing</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-dark shadow-lg transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-start px-8 pt-24 space-y-8 text-white text-lg">
          <a href="#home" onClick={closeMenu} className="hover:text-gray-300">Home</a>
          <a href="#about" onClick={closeMenu} className="hover:text-gray-300">About</a>
          <a href="#experience" onClick={closeMenu} className="hover:text-gray-300">Experience</a>
          <a href="#projects" onClick={closeMenu} className="hover:text-gray-300">Projects</a>
          <a href="#extracurriculars" onClick={closeMenu} className="hover:text-gray-300">Extracurriculars</a>
          <a href="https://tanyasthoughts.netlify.app/" onClick={closeMenu} className="hover:text-gray-300">Writing</a>
          <a href="#contact" onClick={closeMenu} className="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
