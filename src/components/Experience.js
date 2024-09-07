import React from 'react';

function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">Experience</h2>
        <div>
          <h3 className="text-2xl font-bold">Mitacs Globalink Intern</h3>
          <p>University of British Columbia | 2024 - Present</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Performed meticulous research on LLMs to aid in software programming.</li>
            <li>Conducted literature reviews and data analysis to deliver scientific reports using Python, Latex, and more.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Generative AI Researcher</h3>
          <p>Hong Kong Polytechnic University | 2024 - Present</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Performed extensive research on generative AI models and tools at the Industrial Lab of PolyU to create an intelligent chatbot, using Azure, AWS services, and Python.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Researcher and Web Developer</h3>
          <p>Polk Audio | 2021 - 2022</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Spearheaded the design and development of their website using HTML, ensuring a visually appealing and user-friendly online presence.</li>
            <li>Conducted research on Polk Audio's product line, staying up-to-date with the latest industry trends and market demands, to author informative posts and enhance product awareness.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Head Writer and Researcher</h3>
          <p>Lokal | 2020 - 2021 </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Led the research department, authoring informationalarticles and conducting extensive research on thelatest technological products.</li>
            <li>Employed a testing, research, and experimentationapproach to drive innovation and enhance marketingstrategies, contributing to successful client campaignsand optimized product launches.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
