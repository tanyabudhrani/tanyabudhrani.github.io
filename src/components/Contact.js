import React from 'react';
import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import Typed from 'react-typed';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto text-center">
        {/* Typing animation for "Contact Me" */}
        <h2 className="text-4xl font-bold mb-6">
          <Typed
            strings={['Contact Me']}
            typeSpeed={100}
            backSpeed={50}
            loop={false}
          />
        </h2>

        {/* Animate "Let's get in touch" text */}
        <motion.p
          className="text-xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.75, ease: 'easeInOut' }}
        >
          Let’s get in touch:
        </motion.p>

        {/* Contact Buttons with Icons */}
        <div className="mt-6 space-x-4 flex justify-center">
          {/* Email Icon */}
          <motion.a
            href="mailto:tanyabudhrani04@gmail.com"
            className="px-4 py-4 bg-gradient text-white rounded-full border-gray-500 hover:bg-teal-500 hover:text-black transition-all border-2 shadow-xl hover:shadow-2xl border-transparent"
            whileHover={{ scale: 1.2 }}
          >
            <AiOutlineMail size="2.5rem" />
          </motion.a>

          {/* GitHub Icon */}
          <motion.a
            href="https://github.com/tanyabudhrani"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-4 bg-gradient text-white rounded-full border-gray-500 hover:bg-teal-500 hover:text-black transition-all border-2 shadow-xl hover:shadow-2xl border-transparent"
            whileHover={{ scale: 1.2 }}
          >
            <AiFillGithub size="2.5rem" />
          </motion.a>

          {/* LinkedIn Icon */}
          <motion.a
            href="https://www.linkedin.com/in/tanya-budhrani/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-4 bg-gradient text-white rounded-full border-gray-500 hover:bg-teal-500 hover:text-black transition-all border-2 shadow-xl hover:shadow-2xl border-transparent"
            whileHover={{ scale: 1.2 }}
          >
            <AiFillLinkedin size="2.5rem" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
