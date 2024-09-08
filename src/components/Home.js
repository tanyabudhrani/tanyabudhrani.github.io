import React from 'react';

function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gray-900">
      <h1 className="text-5xl font-bold mb-4 text-white">Tanya Budhrani</h1>
      <p className="text-2xl mb-8 text-white" >ML Researcher | Computer Scientist | Linguist</p>
      <div className="flex space-x-4">
        <a href="https://github.com/tanyabudhrani" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/tanya-budhrani/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          LinkedIn
        </a>
        <a href="https://drive.google.com/file/d/1vkxyMDB5_KpMwt4QXFgT2aqdRizr8Czh/view" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Resume
        </a>
      </div>
    </section>
  );
}

export default Home;
