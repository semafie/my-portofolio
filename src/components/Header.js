import React from 'react';

const Header = () => {
  return (
    <div className="h-20 flex text-sm text-white duration-700 justify-center  items-center sm:gap-5 sm:text-lg lg:gap-10 lg:h-28 lg:text-xl ll:gap-16">
            
            <a href="#project" className="mx-2">Project</a>
            <a href="#skills" className="mx-2">Skills</a>
            <a href="#social-media" className="mx-2">Social Media</a>
    </div>
  );
};

export default Header;
