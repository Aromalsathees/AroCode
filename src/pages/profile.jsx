import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import profileImage from "../assets/IMG_20260611_140132.jpg.jpeg";

const Profile = () => {

  const [open, setOpen] = useState(false);

  return (
    <div id="about" className="w-full min-h-screen bg-slate-950 relative z-10">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center md:gap-10 gap-7 text-white pt-20 px-4">

              <div>
                <img className='md:w-[500px] w-full h-auto rounded-2xl' src={profileImage} alt="" />
              </div>
              
              <div className="flex flex-col justify-start md:gap-2">
                    <h1 className='md:mt-5 font-extrabold'>ABOUT</h1>

                    <h1 className='flex gap-2 font-sans font-bold md:text-5xl mt-5 italic'>
                      <span className="block text-white">Hey, I'm </span>
                      <span className="block text-blue-500"> Aaromal Satheesh.</span>
                    </h1>

                    <p className='text-sm font-light italic'>A typical Intellectual</p> 

                    <div className="flex flex-col gap-3 mt-5 text-gray-500">
                       <p>I'm a python full-stack Developer who genuinely can't stop learning — new frameworks, new tools, new ways of thinking about problems</p>
                       <p>That's why I help students and aspiring developers gain practical skills through real projects, hands-on coding, and problem-solving.</p>
                    </div>

                    {/* BUTTON FIXED */}
                    <button
                      onClick={() => setOpen(true)}
                      className="flex items-center gap-2 bg-blue-950 hover:bg-blue-900 w-fit px-3 py-2 rounded-lg cursor-pointer mt-8"
                    >
                       More about me
                       <FaArrowRight />
                    </button>
              </div>
        </div>

        {/* MODAL */}
       {open && (
  <div className="fixed inset-0 p-5 flex items-center justify-center">
    
    {/* Background overlay */}
    <div
      className="absolute inset-0 bg-black/80"
      onClick={() => setOpen(false)}
    ></div>

    {/* Modal box */}
    <div className="relative bg-slate-900 text-gray-300 p-6 rounded-2xl max-w-lg w-full border border-slate-700 z-10">

      <h2 className="text-2xl font-bold text-white mb-4 italic">
        Anything built here.
      </h2>

      <div className="space-y-4 leading-relaxed">
        <p>
          Interested in working together or building something impactful?
        </p>

        <p>
          Feel free to reach out at 📧{" "}
          <a
            href="mailto:aromalindira802003@gmail.com"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            aromalindira802003@gmail.com
          </a>
        </p>

        <p>
          Whether it's a web application, API, or a new idea, I'd love to hear about it.
        </p>
      </div>

      {/* Close button */}
      <button
        onClick={() => setOpen(false)}
        className="mt-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        Close
      </button>

    </div>
  </div>
)}
    </div>
  )
}

export default Profile


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