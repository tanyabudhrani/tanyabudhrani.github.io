import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p>If you’d like to get in touch, feel free to reach out via the following:</p>
        <div className="mt-6 space-x-4">
          <a href="mailto:tanyabudhrani04@gmail.com" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Email
          </a>
          <a href="https://github.com/tanyabudhrani" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/tanya-budhrani/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
