import React from 'react';

const projects = [
  { name: 'SIMKO', description: 'Lorem ipsum dolor sit amet' },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="bg-dark-700 text-white p-12">
      <h2 className="text-3xl font-bold text-center">My Projects</h2>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-dark-600 p-4 rounded">
            <div className="bg-dark-500 h-32 mb-4"></div>
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p>{project.description}</p>
            <div className="flex justify-between mt-4">
              <button className="bg-primary-500 text-white py-1 px-3 rounded">Details</button>
              <button className="bg-secondary-500 text-white py-1 px-3 rounded">GitHub</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
