import React, { useState } from "react";
import { FaBars, FaTimes, FaHome } from "react-icons/fa";
import { GiEgyptianProfile, GiSkills } from "react-icons/gi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full p-6 absolute top-0 left-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto text-white">

        {/* Top Bar */}
        <div className="flex justify-between items-center">

          {/* Logo */}
          <h1 className="text-2xl md:text-4xl font-bold">
            <span className="text-white italic">Aro</span>
            <span className="text-blue-300 italic">Code</span>
          </h1>

          {/* Burger Icon */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center text-lg">

            <li className="hover:bg-gray-700 rounded-2xl p-3 cursor-pointer transition-all duration-300 flex items-center gap-2">
              <FaHome />
              <a href="#home">Home</a>
            </li>

            <li className="hover:bg-gray-700 rounded-2xl p-3 cursor-pointer transition-all duration-300 flex items-center gap-2">
              <GiEgyptianProfile />
              <a href="#about">About</a>
            </li>

            <li className="hover:bg-gray-700 rounded-2xl p-3 cursor-pointer transition-all duration-300 flex items-center gap-2">
              <GiSkills />
              <a href="#skills">Skills</a>
            </li>

            <li className="hover:bg-gray-700 rounded-2xl p-3 cursor-pointer transition-all duration-300 flex items-center gap-2">
              <MdOutlineConnectWithoutContact />
              <a href="#contact">Contact</a>
            </li>

            <li>
              <div className="relative">
                <input
                  className="rounded-full border border-gray-500 bg-transparent py-2 pl-4 pr-10 outline-none focus:border-blue-400"
                  type="text"
                  placeholder="Search..."
                />

                <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-400" />
              </div>
            </li>

          </ul>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="flex flex-col gap-4 mt-6 md:hidden backdrop-blur-sm p-4 rounded-2xl">

            <li className="hover:bg-gray-700 rounded-2xl p-3 cursor-pointer transition-all duration-300 flex items-center gap-3">
              <FaHome />
             <a href="#home">Home</a>
            </li>

            <li className="hover:bg-gray-700 rounded-2xl p-3 cursor-pointer transition-all duration-300 flex items-center gap-3">
              <GiEgyptianProfile />
              <Link to="#about">About</Link>
            </li>

            <li className="hover:bg-gray-700 rounded-2xl p-3 cursor-pointer transition-all duration-300 flex items-center gap-3">
              <GiSkills />
              <a href="#skills">Skills</a>
            </li>

            <li className="hover:bg-gray-700 rounded-2xl p-3 cursor-pointer transition-all duration-300 flex items-center gap-3">
              <MdOutlineConnectWithoutContact />
              <a href="#contact">Contact</a>
            </li>

            <li>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full rounded-full border border-gray-500 bg-transparent py-2 pl-4 pr-10 outline-none"
                />

                <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-400" />
              </div>
            </li>

          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;


// import React, { useState } from "react";
// import { FaBars, FaTimes, FaHome } from "react-icons/fa";
// import { GiEgyptianProfile } from "react-icons/gi";
// import { MdOutlineConnectWithoutContact } from "react-icons/md";
// import { GiSkills } from "react-icons/gi";
// import { CiSearch } from "react-icons/ci";


// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="w-full p-6 absolute top-0 left-0 z-50 bg-transparent">
//       <div className="max-w-7xl mx-auto text-white">

//         {/* Top Bar */}
//         <div className="flex justify-between items-center">

//           {/* Logo */}
//           <h1 className="text-2xl md:text-4xl font-bold">
//             <span className="text-white italic">Aro</span>
//             <span className="text-blue-300 italic">Code</span>
//           </h1>

//           {/* Burger Icon */}
//           <button
//             className="md:hidden text-2xl"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex gap-6 items-center text-lg">

//             <li className="hover:bg-gray-700 rounded-2xl p-3 cursor-pointer transition-all duration-300">
//               <FaHome className="text-xl" />
//             </li>

//             <li className="hover:bg-gray-700 rounded-2xl p-3 cursor-pointer transition-all duration-300">
//               Home
//             </li>

//             <li className="hover:bg-gray-700 rounded-2xl p-3 cursor-pointer transition-all duration-300">
//               About
//             </li>

//             <li className="hover:bg-gray-700 rounded-2xl p-3 cursor-pointer transition-all duration-300">
//               Courses
//             </li>

//             <li className="hover:bg-gray-700 rounded-2xl p-3 cursor-pointer transition-all duration-300">
//               Contact
//             </li>

//             <li>
//               <input
//                 className="rounded-full border border-gray-500 bg-transparent px-4 py-2 outline-none focus:border-blue-400"
//                 type="text"
//                 placeholder="Search..."
//               />
//             </li>

//           </ul>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <ul className="flex flex-col gap-4 mt-6 md:hidden  backdrop-blur-sm p-4 rounded-2xl">
            
//             <li className="hover:bg-gray-700 rounded-2xl p-3 cursor-pointer transition-all duration-300 flex items-center gap-3">
//               <FaHome />
//               Home
//             </li>
            
//             <li className="hover:bg-gray-700 rounded-2xl p-3 cursor-pointer transition-all duration-300 flex items-center gap-3">
//               <GiEgyptianProfile />
//               About
//             </li>

//             <li className="hover:bg-gray-700 rounded-2xl p-3 cursor-pointer transition-all duration-300 flex items-center gap-3">
//               <MdOutlineConnectWithoutContact />
//               Contact
//             </li>

//             <li className="hover:bg-gray-700 rounded-2xl p-3 cursor-pointer transition-all duration-300 flex items-center gap-3">
//               <GiSkills />
//               Skills
//             </li>
// <li>
//   <div className="relative w-64">
//     <input
//       type="text"
//       placeholder="Search..."
//       className="w-full rounded-full border border-gray-500 bg-transparent py-2 pl-4 pr-10 outline-none"
//     />

//     <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-400" />
//   </div>
// </li>
//           </ul>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Header;

