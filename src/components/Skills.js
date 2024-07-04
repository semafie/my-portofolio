import React from 'react';

const skills = ['Java', 'PHP', 'Javascript', 'Dart', 'Vanilla CSS', 'Laravel', 'React', 'UI UX Figma', 'Node.js', 'Express js', 'Tailwind CSS', 'MySQL'];

const Skills = () => {
  return (
    
    <section   >
      
      <img alt="Profile" src="/image/segitiga_atas.png" className=" w-full"></img>
      <div id="skills" className="bg-[#183D3D] relative bg-dark-800 text-white px-4 pb-12 pt-1 sm:px-12 md:px-20 ll:px-24">
      <h2 className="text-3xl  font-bold text-right mr-16 sm:mr-44 sm:text-4xl sm:mb-16 md:text-5xl md:mb-20 ll:mb-28 ">My Skills</h2>
      
      <div className="absolute right-0 top-12 z-10 h-1 w-52 bg-white sm:w-96 sm:top-[55px] md:w-[460px] md:top-[65px] ll:w-[490px]"></div>
      
      <div className=" flex flex-wrap justify-between mt-6 gap-y-4 sm:mb-12 sm:gap-y-6 md:gap-y-8 md:mb-20 ll:gap-y-16 ll:mb-20 ">
        
      {skills.map((skill, index) => (
        <div key={index} className="flex gap-1 sm:gap-2 md:gap-2 ll:gap-3">
          <div   className="size-9 bg-white sm:size-12 md:size-[55px] ll:size-[80px]" ></div>
          <div  className="text-xs bg-dark-600 rounded text-left sm:text-sm md:text-base ll:text-xl">
            <h3 className="text-xs font-semibold sm:text-sm md:text-base ll:text-xl">{skill}</h3>
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
