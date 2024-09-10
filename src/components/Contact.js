import React from 'react';
import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto text-center">
        {/* Animated "Contact Me" heading */}
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Contact Me
        </motion.h2>

        {/* Animate "Let's get in touch" text */}
        <motion.p
          className="text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Let’s get in touch:
        </motion.p>

        {/* Contact Buttons with Icons */}
        <div className="mt-6 space-x-4 flex justify-center">
          {/* Email Icon */}
          <motion.a
            href="mailto:tanyabudhrani04@gmail.com"
            className="p-4 bg-gradient-to-r from-teal-500 to-teal-400 text-white rounded-full hover:bg-teal-500 transition-all border-2 shadow-xl hover:shadow-2xl"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <AiOutlineMail size="2.5rem" />
          </motion.a>

          {/* GitHub Icon */}
          <motion.a
            href="https://github.com/tanyabudhrani"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gradient-to-r from-teal-500 to-teal-400 text-white rounded-full hover:bg-teal-500 transition-all border-2 shadow-xl hover:shadow-2xl"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <AiFillGithub size="2.5rem" />
          </motion.a>

          {/* LinkedIn Icon */}
          <motion.a
            href="https://www.linkedin.com/in/tanya-budhrani/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gradient-to-r from-teal-500 to-teal-400 text-white rounded-full hover:bg-teal-500 transition-all border-2 shadow-xl hover:shadow-2xl"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <AiFillLinkedin size="2.5rem" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
