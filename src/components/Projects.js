import React from 'react';
import { Icon } from 'boxicons'

const projects = [
  { name: 'Travel haji dan Umroh', 
    description: 'Lorem ipsum dolor sit amet, consectetur lorem lorem lorem',
    link:'https://rahmatantourandtravel.com',
    github:'',
    image:'image/image_travel.png',
    youtube: 'https://www.youtube.com/watch?v=R6oxCfcn58g',
    bahasa:['MySQl', 'PHP', 'Bootstrap'],
     },
  { name: 'SIMKO (Sistem informasi kos)', 
    description: 'Lorem ipsum dolor sit amet, consectetur',
    link:'',
    github:'https://github.com/semafie/Simko-Upper-Version', 
    image:'image/image_simko.png',
    youtube: 'https://www.youtube.com/watch?v=jxuhXv1vDm0&t=39s',
    bahasa:['Java', 'Neatbeant', 'MySQL'],
  },
  { name: 'BumnMuda (Bimbel Online)', 
    description: 'Lorem ipsum dolor sit amet, consectetur',
    link:'',
    github:'', 
    image:'image/image_bimbel.png',
    youtube: 'https://www.youtube.com/watch?v=Tg8Yq_WiKhQ',
    bahasa:['PHP','Laravel', 'Bootstrap', 'MySQL'],
  },
];

const Projects = () => {
  return (
    <section id="project" className="relative text-white px-4 ">
      <h2 className="text-3xl font-bold text-left ml-5 duration-700 sm:ml-40 sm:text-4xl md:text-5xl ll:mb-28">My Projects</h2>
      <div className="absolute left-0 top-12 z-10 h-1 duration-700 w-52 bg-white sm:w-96 sm:top-[55px] md:w-[450px] md:top-[65px]"></div>
      <div className="flex justify-center flex-wrap duration-700  gap-4 mt-12 sm:mt-10 md:mt-16 ll:gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#071F10] border-[1px] duration-700 h-[400px] w-[310px] sm:w-[280px] border-white ll:w-[330px] ll:h-[420px]">
            <img src={project.image} className="w-[310px] duration-700 sm:w-[280px] ll:w-[330px]"></img>
            
            <h3 className="text-lg font-bold ml-4 mt-2">{project.name}</h3>
            <p className="ml-4 mr-2 text-md mt-2 overflow-y-auto h-28 ">{project.description}</p>
            <div className="flex items-end h-[100px] w-full p-4">
            <div className="flex  flex-wrap overflow-y-auto h-16 w-10/12 gap-2">
            {project.bahasa && project.bahasa.map((bahasa, index) => (
                  <h1 key={index} className="w-24 h-6  rounded-full bg-gradient-to-r from-[#72998B] to-[#CAE7CA] text-sm text-center">{bahasa}</h1>
                ))}
            </div>
            <div className="flex flex-wrap  justify-between items-end  w-2/12">
            {project.link && (
                  <a href={project.link} target="_blank"  className="cursor-pointer"><i className="bx bx-right-top-arrow-circle text-xl"></i></a>
                )}
                
            {project.github && (
              <a href={project.github} target="_blank" className="cursor-pointer"><i className="bx bxl-github text-xl"></i></a>
            )}
            {project.youtube && (
              <a href={project.youtube} rel="noopener noreferrer" className="cursor-pointer"><i className="bx bxl-youtube text-xl" ></i></a>
            )}
            
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
