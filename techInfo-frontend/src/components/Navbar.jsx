import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          MyLogo
        </div>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
        </ul>
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
