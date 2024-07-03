import React from 'react';

const skills = ['Java', 'PHP', 'Javascript', 'Dart', 'Vanilla CSS', 'Laravel', 'React', 'UI UX Figma', 'Node.js', 'Express js', 'Tailwind CSS', 'MySQL'];

const Skills = () => {
  return (
    
    <section >
      
      <img alt="Profile" src="/image/segitiga_atas.png" className=" w-full"></img>
      <div className="bg-[#183D3D] relative bg-dark-800 text-white px-4 pb-12 pt-1">
      <h2 className="text-3xl  font-bold text-right mr-16">My Skills</h2>
      
      <div className="absolute right-0 top-12 z-10 h-1 w-52 bg-white "></div>
      
      <div className=" flex flex-wrap justify-between mt-6 gap-y-4">
        
      {skills.map((skill, index) => (
        <div key={index} className="flex gap-1">
          <div   className="size-9 bg-white" ></div>
          <div  className="text-xs bg-dark-600 rounded text-left">
            <h3 className="text-xs font-semibold">{skill}</h3>
            <p>Level: Intermediate</p>
          </div>
          </div>
        ))}
      </div>
      
      </div>
      <img alt="Profile" src="/image/segitiga_bawah.png" className="w-full"></img>
    </section>
  );
};

export default Skills;
