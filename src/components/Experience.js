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
        {/* Add more experiences */}
      </div>
    </section>
  );
}

export default Experience;
