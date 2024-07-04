import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-dark-700 text-white px-7  flex flex-wrap justify-center items-center duration-700 sm:px-12 md:px-20 lg:px-5 ">
      <img src="/image/profile2.png" alt="Profile" className="hover:opacity-100 opacity-40 ease-in duration-1000 size-64 mb-4 sm:size-80 md:size-[400px] lg:size-[450px] ll:size-[550px]" />
      
       <div className="flex-col items-center lg:w-[450px] ll:w-[550px]">

      <h1 className="text-2xl text-gray-600 duration-700 font-bold md:text-3xl ll:text-4xl">Hello, </h1>
      <h2 className="text-4xl font-bold duration-700 md:text-5xl ll:text-6xl">SEMAFIE Here!</h2>
      <p className="text-xs sm:text-sm duration-700 md:text-lg lg:text-base ll:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus ligula elit. Mauris sed erat euismod, laoreet ligula sit amet, ultrices velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Pellentesque sit amet nulla porttitor, pellentesque risus id, porttitor nisi.</p>
      <div className="mt-6 pb-[69px] lg:pb-0">
        <a href="https://wa.me/+6283108833461"><button  className="border-2  border-[#5C8374] duration-700 hover:bg-[#5C8374] text-white py-2 px-4 rounded mr-4 md:py-3 md:px-9 ll:px-12">Contact</button></a>
        <button className=" bg-gradient-to-r from-[#2F5B4A] to-[#5C8374] hover:from-[#55967D] duration-700 hover:to-[#82B7A3] text-white py-2 px-4 rounded md:py-3 md:px-9 ll:px-12">Download CV</button>

      </div> 
      </div> 
      
    </section>
  );
};

export default HeroSection;
