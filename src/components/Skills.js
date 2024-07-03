import React from 'react';

const skills = ['Laravel', 'React', 'Node.js', 'Express', 'Tailwind CSS', 'MySQL'];

const Skills = () => {
  return (
    <section className="bg-dark-800 text-white p-12">
      <h2 className="text-3xl font-bold text-center">My Skills</h2>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-dark-600 p-4 rounded text-center">
            <h3 className="text-lg font-semibold">{skill}</h3>
            <p>Level: Intermediate</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
