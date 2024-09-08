import React from 'react';

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-radial p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src="src/assets/task.jpg" alt="Project 1" className="mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-bold">Task Manager</h3>
            <p className="mt-2">A comprehensive Java-based task management system for efficient task handling.</p>
            <a href="https://github.com/tanyabudhrani/Task-Management-System.git" className="text-blue-500 hover:underline mt-2 inline-block">
              View on GitHub
            </a>
          </div>
          <div className="bg-gradient-radial p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src="src/assets/line.jpg" alt="Project 1" className="mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-bold">Line Scheduler</h3>
            <p className="mt-2">This Production Line Scheduling (PLS) machine is specifically designed to enhance production planning and maximize the utilization of the three plants of a medium-sized steel manufacturer.</p>
            <a href="https://github.com/tanyabudhrani/Line-Scheduler.git" className="text-blue-500 hover:underline mt-2 inline-block">
              View on GitHub
            </a>
          </div>
          <div className="bg-gradient-radial p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src="src/assets/Threads.png" alt="Project 1" className="mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-bold">Multi-thread Web Server</h3>
            <p className="mt-2">This project is a multi-threaded web server implemented in Python, designed to handle concurrent connections efficiently. It leverages Python's socket and threading modules to manage and serve HTTP requests.</p>
            <a href="https://github.com/tanyabudhrani/Multi-thread-Web-Server.git" className="text-blue-500 hover:underline mt-2 inline-block">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
