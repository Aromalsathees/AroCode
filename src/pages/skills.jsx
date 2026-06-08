import React from 'react'
import { AiFillAndroid } from "react-icons/ai";
import { LuBrain } from "react-icons/lu";
import { SiDjango } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="w-full min-h-screen bg-black p-4 lg:p-40">
      <div className="mx-auto">

        <div className='flex flex-col justify-center text-center font-bold'>
          <h1 className='text-white text-lg lg:text-2xl'>
            WHAT WE OFFER
          </h1>

          <h1 className='flex flex-col lg:flex-row justify-center items-center text-2xl lg:text-4xl font-bold gap-2'>
            <span className='text-white'>
              Everything you need to level up
            </span>
            <span className='text-blue-500'>
              skills
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 pt-10">

          {/* Card 1 */}
          <div className="bg-slate-950 rounded-2xl p-6 lg:p-10 lg:col-span-2 h-96 cursor-pointer border-2 shadow-md hover:border-orange-300 transition-colors duration-200">
            <div className="flex justify-between text-gray-500">
              <h1>COURSES</h1>
              <h1 className='bg-gray-900 rounded-2xl p-1'>40+ courses</h1>
            </div>

            <AiFillAndroid className="text-6xl text-blue-500 my-6" />

            <div className='flex flex-col gap-4 lg:gap-10'>
              <h1 className='text-white text-2xl lg:text-3xl font-bold'>
                Web Development
              </h1>

              <h1 className='text-gray-500 font-medium text-base lg:text-xl'>
                From HTML basics to full-stack apps.React, Next, Node
              </h1>
            </div>

            <div className='flex text-blue-500 gap-2 text-lg lg:text-xl font-semibold mt-8 lg:mt-12'>
              <a href="/">Explore</a>
              <FaArrowRight className='mt-1' />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-950 rounded-2xl p-6 lg:p-10 h-96 cursor-pointer border-2 shadow-md hover:border-indigo-600 transition-colors duration-200">
            <div className="flex justify-between text-gray-500 font-normal text-sm">
              <h1>COURSES</h1>
              <h1 className='bg-gray-900 rounded-2xl p-1'>40+ courses</h1>
            </div>

            <LuBrain className="text-6xl text-violet-500 my-6" />

            <div className='flex flex-col gap-4 lg:gap-10'>
              <h1 className='text-white text-2xl font-bold'>
                AI & Machine Learning
              </h1>

              <h1 className='text-gray-500 font-medium text-base lg:text-xl'>
                Learn AI, Machine Learning and modern tools.
              </h1>
            </div>

            <div className='flex text-blue-500 gap-2 text-lg lg:text-xl font-semibold mt-8 lg:mt-12'>
              <a href="/">Explore</a>
              <FaArrowRight className='mt-1' />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-950 rounded-2xl p-6 lg:p-10 h-96 cursor-pointer border-2 shadow-md hover:border-violet-600 transition-colors duration-200">
            <div className="flex justify-between text-gray-500">
              <h1>COURSES</h1>
              <h1 className='bg-gray-900 rounded-2xl p-1'>40+ courses</h1>
            </div>

            <SiDjango className="text-6xl text-green-400 my-6" />

            <div className='flex flex-col gap-4 lg:gap-10'>
              <h1 className='text-white text-2xl font-bold'>
                Django Development
              </h1>

              <h1 className='text-gray-500 font-medium text-base lg:text-xl'>
                Build scalable backend applications with Django.
              </h1>
            </div>

            <div className='flex text-blue-500 gap-2 text-lg lg:text-xl font-semibold mt-8 lg:mt-12'>
              <a href="/">Explore</a>
              <FaArrowRight className='mt-1' />
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-slate-950 rounded-2xl p-6 lg:p-10 lg:col-span-2 h-96 cursor-pointer border-2 shadow-md hover:border-green-600 transition-colors duration-200">
            <div className="flex justify-between text-gray-500">
              <h1>COURSES</h1>
              <h1 className='bg-gray-900 rounded-2xl p-1'>40+ courses</h1>
            </div>

            <SiFastapi className="text-6xl text-orange-500 my-6" />

            <div className='flex flex-col gap-4 lg:gap-10'>
              <h1 className='text-white text-2xl font-bold'>
                FastAPI Development
              </h1>

              <h1 className='text-gray-500 font-medium text-base lg:text-xl'>
                Build high-performance APIs using FastAPI and Python.
              </h1>
            </div>

            <div className='flex text-blue-500 gap-2 text-lg lg:text-xl font-semibold mt-8 lg:mt-12'>
              <a href="/">Explore</a>
              <FaArrowRight className='mt-1' />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills;


// import React from 'react'
// import { AiFillAndroid } from "react-icons/ai";
// import { LuBrain } from "react-icons/lu";
// import { SiDjango } from "react-icons/si";
// import { SiFastapi } from "react-icons/si";
// import { FaArrowRight } from "react-icons/fa";

// const Skills = () => {
//   return (
//     <div className="w-full min-h-screen bg-black p-4 md:p-40">
//       <div className="mx-auto">

//         <div className='flex flex-col justify-center text-center font-bold'>
//           <h1 className='text-white text-lg md:text-2xl'>
//             WHAT WE OFFER
//           </h1>

//           <h1 className='flex flex-col md:flex-row justify-center items-center text-2xl md:text-4xl font-bold gap-2'>
//             <span className='text-white'>
//               Everything you need to level up
//             </span>
//             <span className='text-blue-500'>
//               skills
//             </span>
//           </h1>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 pt-10">

//           {/* Card 1 */}
//           <div className="bg-slate-950 rounded-2xl p-6 md:p-10 md:col-span-2 h-96 cursor-pointer border-2 shadow-md hover:border-orange-300 transition-colors duration-200">
//             <div className="flex justify-between text-gray-500">
//               <h1>COURSES</h1>
//               <h1 className='bg-gray-900 rounded-2xl p-1'>40+ courses</h1>
//             </div>

//             <AiFillAndroid className="text-6xl text-blue-500 my-6" />

//             <div className='flex flex-col gap-4 md:gap-10'>
//               <h1 className='text-white text-2xl md:text-3xl font-bold'>
//                 Web Development
//               </h1>

//               <h1 className='text-gray-500 font-medium text-base md:text-xl'>
//                 From HTML basics to full-stack apps.React, Next, Node
//               </h1>
//             </div>

//             <div className='flex text-blue-500 gap-2 text-lg md:text-xl font-semibold mt-8 md:mt-12'>
//               <a href="/">Explore</a>
//               <FaArrowRight className='mt-1' />
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-slate-950 rounded-2xl p-6 md:p-10 h-96 cursor-pointer border-2 shadow-md hover:border-indigo-600 transition-colors duration-200">
//             <div className="flex justify-between text-gray-500 font-normal text-sm">
//               <h1>COURSES</h1>
//               <h1 className='bg-gray-900 rounded-2xl p-1'>40+ courses</h1>
//             </div>

//             <LuBrain className="text-6xl text-violet-500 my-6" />

//             <div className='flex flex-col gap-4 md:gap-10'>
//               <h1 className='text-white text-2xl font-bold'>
//                 AI & Machine Learning
//               </h1>

//               <h1 className='text-gray-500 font-medium text-base md:text-xl'>
//                 Learn AI, Machine Learning and modern tools.
//               </h1>
//             </div>

//             <div className='flex text-blue-500 gap-2 text-lg md:text-xl font-semibold mt-8 md:mt-12'>
//               <a href="/">Explore</a>
//               <FaArrowRight className='mt-1' />
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-slate-950 rounded-2xl p-6 md:p-10 h-96 cursor-pointer border-2 shadow-md hover:border-violet-600 transition-colors duration-200">
//             <div className="flex justify-between text-gray-500">
//               <h1>COURSES</h1>
//               <h1 className='bg-gray-900 rounded-2xl p-1'>40+ courses</h1>
//             </div>

//             <SiDjango className="text-6xl text-green-400 my-6" />

//             <div className='flex flex-col gap-4 md:gap-10'>
//               <h1 className='text-white text-2xl font-bold'>
//                 Django Development
//               </h1>

//               <h1 className='text-gray-500 font-medium text-base md:text-xl'>
//                 Build scalable backend applications with Django.
//               </h1>
//             </div>

//             <div className='flex text-blue-500 gap-2 text-lg md:text-xl font-semibold mt-8 md:mt-12'>
//               <a href="/">Explore</a>
//               <FaArrowRight className='mt-1' />
//             </div>
//           </div>

//           {/* Card 4 */}
//           <div className="bg-slate-950 rounded-2xl p-6 md:p-10 md:col-span-2 h-96 cursor-pointer border-2 shadow-md hover:border-green-600 transition-colors duration-200">
//             <div className="flex justify-between text-gray-500">
//               <h1>COURSES</h1>
//               <h1 className='bg-gray-900 rounded-2xl p-1'>40+ courses</h1>
//             </div>

//             <SiFastapi className="text-6xl text-orange-500 my-6" />

//             <div className='flex flex-col gap-4 md:gap-10'>
//               <h1 className='text-white text-2xl font-bold'>
//                 FastAPI Development
//               </h1>

//               <h1 className='text-gray-500 font-medium text-base md:text-xl'>
//                 Build high-performance APIs using FastAPI and Python.
//               </h1>
//             </div>

//             <div className='flex text-blue-500 gap-2 text-lg md:text-xl font-semibold mt-8 md:mt-12'>
//               <a href="/">Explore</a>
//               <FaArrowRight className='mt-1' />
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Skills;
