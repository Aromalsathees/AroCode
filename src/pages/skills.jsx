import React from "react";
import { FaPython, FaDocker, FaArrowRight } from "react-icons/fa";

import { LuBrain } from "react-icons/lu";
import { SiDjango } from "react-icons/si";
import { DiDocker } from "react-icons/di";



const skills = [
  {
    title: "Backend Development",
    description:
      "Building scalable web applications using Python, Django, Flask, and FastAPI.",
    tech: "Python • python",
    icon: <FaPython className="text-2xl md:text-4xl text-yellow-200 my-6" />,
    span: "md:col-span-2",
  },
  {
    title: "REST API Development",
    description:
      "Creating secure and efficient APIs with Django REST Framework, FastAPI, and PostgreSQL.",
    tech: "DRF • Django",
    icon: <SiDjango className="text-2xl md:text-4xl text-green-500 my-6" />,
    
     
  },
  {
    title: "Full-Stack Development",
    description:
      "Developing responsive applications using React.js, JavaScript, Django, and REST APIs.",
    tech: "React • Django",
    icon: <LuBrain className="text-2xl md:text-4xl text-violet-500 my-6" />,
  },
  {
    title: "DevOps & Cloud",
    description:
      "Deploying and managing applications with Docker, GitHub Actions, PostgreSQL, and Linode.",
    tech: "Docker • CI/CD",
    icon: <DiDocker className="text-4xl text-blue-600 my-6" />,
    span: "md:col-span-2",
  },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full min-h-screen bg-black px-4 py-20 md:p-20"
    >
      <div className="mx-auto">
        <div className="flex flex-col justify-center text-center font-bold">
          <h1 className="text-white text-xl italic">TECHNICAL SKILLS</h1>

          <h1 className="flex flex-col md:flex-row justify-center items-center text-xl md:text-4xl gap-2">
            {/* <span className="text-white">
              Technologies I Work With
            </span> */}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 p-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`card-wrapper h-80 cursor-pointer ${skill.span || ""}`}
            >
              <div className="card-content h-full p-6 md:p-10 flex flex-col">
                {/* Top */}
                <div className="flex justify-between text-gray-500">
                  <h1 className="text-sm">SKILL</h1>
                  <h1 className="bg-gray-900 rounded-2xl px-3 py-1 text-sm">
                    {skill.tech}
                  </h1>
                </div>

                {skill.icon}

                {/* Content */}
                <div className="flex-1">
                  <h1 className="text-white text-xl font-semibold mb-3">
                    {skill.title}
                  </h1>

                  <p className="text-gray-500">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="flex items-center gap-2 text-blue-500 pt-4">
                  <a href="/">Explore</a>
                  <FaArrowRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;


// import React from 'react'
// import { AiFillAndroid } from "react-icons/ai";
// import { LuBrain } from "react-icons/lu";
// import { SiDjango } from "react-icons/si";
// import { SiFastapi } from "react-icons/si";
// import { DiDocker } from "react-icons/di";
// import { FaArrowRight } from "react-icons/fa";

// const Skills = () => {
//   return (
//     <div id="skills" className="w-full min-h-screen bg-black pt-20 px-4 py-20 md:p-20">
//       <div className="mx-auto">

//         <div className='flex flex-col justify-center text-center font-bold'>
//           <h1 className='text-blue-950 text-xl font-bold'>
//             WHAT WE OFFER
//           </h1>

//           <h1 className='flex flex-col md:flex-row justify-center items-center text-xl md:text-4xl font-bold gap-2'>
//             <span className='text-white'>
//               Everything you need to level up
//             </span>
//             <span className='text-blue-950'>
//               skills
//             </span>
//           </h1>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">

//           {/* Card 1 */}
//           <div className="card-wrapper md:col-span-2 h-80 cursor-pointer">
//   <div className="card-content p-6 md:p-10">

//     <div className="flex justify-between text-gray-500">
//       <h1 className='text-sm'>COURSES</h1>
//       <h1 className='bg-gray-900 rounded-2xl p-1 text-sm'>
//         40+ courses
//       </h1>
//     </div>

//     <AiFillAndroid className="text-4xl text-red-500 my-6" />

//     <div className='flex flex-col gap-4 md:gap-2'>
//       <h1 className='text-white text-xl font-semibold'>
//         Backend Development
//       </h1>

//       <p className='text-gray-500'>
//         Building scalable web applications using Python, Django, Flask, and FastAPI.
//       </p>
//     </div>

//     <div className='flex gap-2 text-blue-500 mt-2'>
//       <a href="/">Explore</a>
//       <FaArrowRight className='mt-1' />
//     </div>

//   </div>
// </div>

         
//           {/* Card 2 */}
// <div className="card-wrapper h-80 cursor-pointer">
//   <div className="card-content p-6 md:p-10">

//     <div className="flex justify-between text-gray-500 font-normal text-sm">
//       <h1 className='text-sm'>COURSES</h1>
//       <h1 className='bg-gray-900 rounded-2xl p-1 text-sm'>
//         40+ courses
//       </h1>
//     </div>

//     <LuBrain className="text-4xl text-violet-500 my-6" />

//     <div className='flex flex-col gap-4 md:gap-2'>
//       <h1 className='text-white text-xl font-semibold'>
//         REST API Development
//       </h1>

//       <p className='text-gray-500 font-medium md:font-normal'>
//         Creating secure and efficient APIs with Django REST Framework, FastAPI, and PostgreSQL.
//       </p>
//     </div>

//     <div className='flex gap-2 text-blue-500 font-medium md:text-normal mt-2'>
//       <a href="/">Explore</a>
//       <FaArrowRight className='mt-1' />
//     </div>

//   </div>
// </div>

// {/* Card 3 */}
// <div className="card-wrapper h-80 cursor-pointer">
//   <div className="card-content p-6 md:p-10">

//     <div className="flex justify-between text-gray-500">
//       <h1 className='text-sm'>COURSES</h1>
//       <h1 className='bg-gray-900 rounded-2xl p-1 text-sm'>
//         40+ courses
//       </h1>
//     </div>

//     <SiDjango className="text-4xl text-green-400 my-6" />

//     <div className='flex flex-col gap-4 md:gap-2'>
//       <h1 className='text-white text-xl font-semibold'>
//         Full-Stack Development
//       </h1>

//       <p className='text-gray-500 font-medium md:font-normal'>
//         Developing responsive applications using React.js, JavaScript, Django, and REST APIs.
//       </p>
//     </div>

//     <div className='flex gap-2 text-blue-500 font-medium md:text-normal mt-2'>
//       <a href="/">Explore</a>
//       <FaArrowRight className='mt-1' />
//     </div>

//   </div>
// </div>

//           {/* Card 4 */}
//           <div className="card-wrapper md:col-span-2 h-80 cursor-pointer">
//   <div className="card-content p-6 md:p-10">

//     <div className="flex justify-between text-gray-500">
//       <h1 className="text-sm">COURSES</h1>
//       <h1 className="bg-gray-900 rounded-2xl p-1 text-sm">
//         40+ courses
//       </h1>
//     </div>

//     <DiDocker  className="text-4xl text-blue-500 my-6" />

//     <div className="flex flex-col gap-4 md:gap-2">
//       <h1 className="text-white text-xl font-semibold">
//         DevOps & Cloud
//       </h1>

//       <p className="text-gray-500 font-medium md:font-normal">
//            Deploying and managing applications with Docker, GitHub Actions, PostgreSQL, and Linode.
//       </p>
//     </div>

//     <div className="flex gap-2 text-blue-500 font-medium md:text-normal mt-2">
//       <a href="/">Explore</a>
//       <FaArrowRight className="mt-1" />
//     </div>

//   </div>
// </div>
      
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Skills;
