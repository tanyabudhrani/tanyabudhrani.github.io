import React from 'react';

function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-5xl font-extrabold text-secondary tracking-wide mb-6">Experience</h2>

        <div className="transition-transform transform hover:scale-105 mb-8">
          <h3 className="text-3xl font-bold text-accent">Mitacs Globalink Intern</h3>
          <p className="text-dark">University of British Columbia | 2024 - Present</p>
          <ul className="list-disc ml-6 mt-2 text-light">
            <li>Performed meticulous research on LLMs to aid in software programming.</li>
            <li>Conducted literature reviews and data analysis to deliver scientific reports using Python, Latex, and more.</li>
          </ul>
        </div>
        
        <div className="border-b border-secondary my-6"></div>

        <div className="transition-transform transform hover:scale-105 mb-8">
          <h3 className="text-3xl font-bold text-accent">Generative AI Researcher</h3>
          <p className="text-dark">Hong Kong Polytechnic University | 2024 - Present</p>
          <ul className="list-disc ml-6 mt-2 text-light">
            <li>Performed extensive research on generative AI models and tools at the Industrial Lab of PolyU to create an intelligent chatbot, using Azure, AWS services, and Python.</li>
          </ul>
        </div>
        
        <div className="border-b border-secondary my-6"></div>

        <div className="transition-transform transform hover:scale-105 mb-8">
          <h3 className="text-3xl font-bold text-accent">Researcher and Web Developer</h3>
          <p className="text-dark">Polk Audio | 2021 - 2022</p>
          <ul className="list-disc ml-6 mt-2 text-light">
            <li>Spearheaded the design and development of their website using HTML, ensuring a visually appealing and user-friendly online presence.</li>
            <li>Conducted research on Polk Audio's product line, staying up-to-date with the latest industry trends and market demands, to author informative posts and enhance product awareness.</li>
          </ul>
        </div>
        
        <div className="border-b border-secondary my-6"></div>

        <div className="transition-transform transform hover:scale-105 mb-8">
          <h3 className="text-3xl font-bold text-accent">Head Writer and Researcher</h3>
          <p className="text-dark">Lokal | 2020 - 2021</p>
          <ul className="list-disc ml-6 mt-2 text-light">
            <li>Led the research department, authoring informational articles and conducting extensive research on the latest technological products.</li>
            <li>Employed a testing, research, and experimentation approach to drive innovation and enhance marketing strategies, contributing to successful client campaigns and optimized product launches.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
