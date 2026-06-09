import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full p-6 absolute top-0 left-0  z-50 bg-transparent ">
      <div className=" max-w-7xl mx-auto text-white">

        {/* Top Bar */}
        <div className="flex justify-between items-center">

          <h1 className="text-2xl md:text-4xl font-bold">
            <span className="text-white">code</span>
            <span className="text-blue-300">witharomal</span>
          </h1>

          {/* Burger Icon */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 items-center font-light text-xl">
            <li className="hover:bg-gray-500 rounded-2xl p-3">Home</li>
            <li className="hover:bg-gray-500 rounded-2xl p-3">About</li>
            <li className="hover:bg-gray-500 rounded-2xl p-3">Courses</li>
            <li className="hover:bg-gray-500 rounded-2xl p-3">Contact</li>

            <input
              className="rounded-full border-2 p-2 px-4"
              type="text"
              placeholder="Enter text"
            />
          </ul>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="flex flex-col gap-4 mt-6 md:hidden ">
            <li className="hover:bg-gray-500 rounded-2xl p-3">Home</li>
            <li className="hover:bg-gray-500 rounded-2xl p-3">About</li>
            <li className="hover:bg-gray-500 rounded-2xl p-3">Courses</li>
            <li className="hover:bg-gray-500 rounded-2xl p-3">Contact</li>

            <input
              className="rounded-full border-2 p-2 px-4 w-full"
              type="text"
              placeholder="Enter text"
            />
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;