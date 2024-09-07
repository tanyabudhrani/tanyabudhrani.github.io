import React from 'react';

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <img src="path/to/python-icon" alt="Python" className="mx-auto w-16" />
            <p>Python</p>
          </div>
          <div className="text-center">
            <img src="path/to/javascript-icon" alt="JavaScript" className="mx-auto w-16" />
            <p>JavaScript</p>
          </div>
          {/* Add more skill items here */}
        </div>
      </div>
    </section>
  );
}

export default Skills;
