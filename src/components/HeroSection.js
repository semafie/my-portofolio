import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-dark-700 text-white px-7 flex justify-center items-center flex-col">
      <img src="/image/profile2.png" alt="Profile" className="hover:opacity-100 opacity-40 ease-in duration-1000 size-64 mb-4" />
      <div className="">
      <h1 className="text-2xl text-gray-600 font-bold">Hello, </h1>
      <h2 className="text-4xl font-bold">Semafie here!</h2>
      <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus ligula elit. Mauris sed erat euismod, laoreet ligula sit amet, ultrices velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Pellentesque sit amet nulla porttitor, pellentesque risus id, porttitor nisi.</p>
      <div className="mt-6 pb-[69px]">
        <a href="https://wa.me/+6283108833461"><button  className="border-2  border-[#5C8374] hover:bg-[#5C8374] text-white py-2 px-4 rounded mr-4">Contact</button></a>
        <button className=" bg-gradient-to-r from-[#2F5B4A] to-[#5C8374] hover:from-[#55967D] hover:to-[#82B7A3] text-white py-2 px-4 rounded">Download CV</button>
      </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
