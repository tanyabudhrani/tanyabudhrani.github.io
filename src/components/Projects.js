import React from 'react';

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-4 rounded-lg">
            <img src="path/to/project-image" alt="Project 1" className="mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-bold">Task Manager</h3>
            <p className="mt-2">A comprehensive Java-based task management system for efficient task handling.</p>
            <a href="https://github.com/tanyabudhrani/Task-Management-System.git" className="text-blue-500 hover:underline mt-2 inline-block">
              View on GitHub
            </a>
          </div>
          {/* Add more project cards here */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
