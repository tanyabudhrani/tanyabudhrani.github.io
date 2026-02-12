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
//         <div className="space-x-6">
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

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // You can install lucide-react or use simple text

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Writing", href: "https://tanyasthoughts.netlify.app/" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`bg-dark p-4 fixed w-full top-0 z-50 transition-all ${isScrolled ? 'bg-opacity-90 backdrop-blur-md' : ''}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-lg font-bold text-white">Tanya Budhrani</h1>

        {/* Desktop Links - Hidden on Mobile */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-white hover:text-cyan-400 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#00040f] flex flex-col items-center space-y-4 py-4 border-t border-gray-800">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-white text-lg">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;