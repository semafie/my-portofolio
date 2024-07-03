import React from 'react';

const Header = () => {
  return (
    <header className="m-0 p-6 flex justify-between items-center">
      <div className="text-white text-lg">Semafie</div>
      <nav>
        <ul className="flex space-x-4">
          <li className="text-white">About me</li>
          <li className="text-white">Project</li>
          <li className="text-white">Skills</li>
          <li className="text-white">Social Media</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
