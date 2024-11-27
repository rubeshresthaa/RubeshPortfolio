import React from 'react';
import logo from '../assets/output-onlinepngtools.png';

const Header = () => {
  return (
    <div className="py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/">
            <img 
              src={logo} 
              className="w-[150px] h-auto" 
              alt="Logo" 
            />
          </a>

          {/* Button */}
          {/* <button 
            className="btn btn-sm bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300"
          >
            My Resume
          </button> */}
            <a
    href="/RubeshResume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gradient btn-link"
  >
    My Resume
  </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
