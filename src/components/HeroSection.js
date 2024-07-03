import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-dark-700 text-white p-12 flex justify-center items-center flex-col">
      <img src="path/to/profile-image.jpg" alt="Profile" className="rounded-full w-32 h-32 mb-4" />
      <h1 className="text-4xl font-bold">Hello, Semafie here!</h1>
      <p className="text-center mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      <div className="mt-6">
        <button className="bg-primary-500 text-white py-2 px-4 rounded mr-4">Contact</button>
        <button className="bg-secondary-500 text-white py-2 px-4 rounded">Download CV</button>
      </div>
    </section>
  );
};

export default HeroSection;
