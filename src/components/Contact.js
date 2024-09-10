import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-dark text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p>If you’d like to get in touch, feel free to reach out via the following:</p>
        <div className="mt-6 space-x-4">
          <a href="mailto:tanyabudhrani04@gmail.com" className="px-6 py-3 bg-gradient text-white rounded-lg border-gray-500 hover:bg-teal-500 hover:text-black transition-all border-2 shadow-xl hover:shadow-2xl border-transparent">
            Email
          </a>
          <a href="https://github.com/tanyabudhrani" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gradient text-white rounded-lg border-gray-500 hover:bg-teal-500 hover:text-black transition-all border-2 shadow-xl hover:shadow-2xl border-transparent">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/tanya-budhrani/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gradient text-white rounded-lg border-gray-500 hover:bg-teal-500 hover:text-black transition-all border-2 shadow-xl hover:shadow-2xl border-transparent">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
