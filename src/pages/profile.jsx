import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import profileImage from "../assets/IMG_20260611_140132.jpg.jpeg";

const Profile = () => {

  const [open, setOpen] = useState(false);

  return (
    <div id="about" className="w-full min-h-screen bg-slate-950 md:pt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center md:gap-10 gap-7 text-white pt-20 px-4">

        <div>
          <img
            className="w-full md:h-72 max-w-md rounded-2xl"
            src={profileImage}
            alt="Aromal Satheesh"
          />
        </div>

        <div className="flex flex-col justify-start md:gap-2">
          <h1 className="md:mt-5 font-extrabold">
            ABOUT
          </h1>

          <h1 className="flex gap-2 font-sans font-bold md:text-5xl mt-5 italic flex-wrap">
            <span className="text-white">Hey, I'm</span>
            <span className="text-blue-950">Aromal Satheesh.</span>
          </h1>

          <p className="text-sm font-light italic">
            A typical Intellectual
          </p>

          <div className="flex flex-col gap-3 mt-5 text-gray-500">
            <p>
              I'm a Python Full-Stack Developer who genuinely can't stop learning —
              new frameworks, new tools, and new ways of thinking about problems.
            </p>

            <p>
              That's why I help students and aspiring developers gain practical
              skills through real projects, hands-on coding, and problem-solving.
            </p>
          </div>

          <div
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 bg-blue-950 w-fit px-4 py-3 rounded-lg cursor-pointer mt-8 hover:bg-blue-900 transition"
          >
            <button>More About Me</button>
            <FaArrowRight />
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4">

          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-lg w-full relative">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-white mb-4 italic">
               Anything built here.
            </h2>

            <div className="text-gray-300 space-y-4">
  <p>
    Interested in working together or building something impactful?
  </p>

  <a
    href="mailto:aromalindira802003@gmail.com"
    className="inline-block text-blue-400 hover:text-blue-300 font-medium"
  >
    📧 aromalindira802003@gmail.com
  </a>

  <p>
    Whether it's a web application, API, or a new idea, I'd love to hear about it.
  </p>
</div>

            <button
              onClick={() => setOpen(false)}
              className="mt-6 bg-blue-950 hover:bg-blue-900 px-4 py-2 rounded-lg text-white"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </div>
  )
}

export default Profile;

// import React from 'react'
// import { FaArrowRight } from "react-icons/fa";
// import profileImage from "../assets/IMG_20260611_140132.jpg.jpeg";

// const Profile = () => {
//   return (
//     <div id="about" className="w-full min-h-screen bg-slate-950">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center md:gap-10 gap-7 text-white pt-20 px-4">

//               <div>
//                 <img className='md:w-2xl h-auto rounded-2xl' src={profileImage} alt="" />
//               </div>
              
//               <div className="flex flex-col justify-start md:gap-2">
//                     <h1 className=' md:mt-5 font-extrabold'>ABOUT</h1>
//                     <h1 className='flex gap-2 font-sans font-bold md:text-5xl mt-5 italic'>
//                       <span className="block text-white">Hey, I'm </span>
//                       <span className="block text-blue-950"> Aaromal Satheesh.</span>
//                     </h1>
//                      <p className='text-sm font-light italic'>A typical Intellectual</p> 
//                     <div className="flex flex-col gap-3 mt-5 text-gray-500">
//                        <p>I'm a python full-stack Developer who genuinely can't stop learning — new frameworks, new tools, new ways of thinking about problems</p>
//                        <p>That's why I help students and aspiring developers gain practical skills through real projects, hands-on coding, and problem-solving.</p>
//                     </div>
//                     <div className="flex items-center gap-2 bg-blue-950 w-fit px-2 py-2 rounded-lg cursor-pointer mt-8 ">
//                        <button>More about me</button>    
//                         <FaArrowRight />
//                     </div>
//               </div>

//         </div>
//     </div>
//   )
// }

// export default Profile