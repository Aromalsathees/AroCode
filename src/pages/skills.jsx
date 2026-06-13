import React from "react";
import { FaPython, FaArrowRight } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import { SiDjango } from "react-icons/si";
import { DiDocker } from "react-icons/di";

const skills = [
  {
    title: "Backend Development",
    description:
      "Building scalable web applications using Django, Flask, and FastAPI.",
    tech: "Python • python",
    icon: <FaPython size={30} className="text-yellow-200 " />,
    span: "md:col-span-2",
  },
  {
    title: "REST API Development",
    description:
      "Creating secure and efficient APIs with Django REST Framework, FastAPI, and Flask.",
    tech: "DRF • Django",
    icon: <SiDjango size={30} className="text-green-500" />,
  },
  {
    title: "Full-Stack Development",
    description:
      "Developing responsive applications using React.js, Django, Tailwind and REST APIs.",
    tech: "React • Django",
    icon: <LuBrain size={30} className="text-violet-500" />,
  },
  {
    title: "DevOps & Cloud",
    description:
      "Deploying and managing applications with Docker, GitHub Actions, PostgreSQL, and Linode.",
    tech: "Docker • CI/CD",
    icon: <DiDocker size={40} className="text-blue-600" />,
    span: "md:col-span-2",
  },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full min-h-screen bg-black px-4 py-20 md:p-28"
    >
      <div className="mx-auto">
        <div className="flex flex-col justify-center text-center font-bold">
          <h1 className="text-white text-xl italic">
            TECHNICAL SKILLS
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 p-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`card-wrapper h-80 md:h-72 cursor-pointer ${
                skill.span || ""
              }`}
            >
              <div className="card-content h-full p-6 md:p-10 flex flex-col">
                {/* Top */}
                <div className="flex justify-between text-gray-500">
                  <h1 className="text-sm">SKILL</h1>

                  <h1 className="bg-gray-900 rounded-2xl px-3 py-1 text-sm">
                    {skill.tech}
                  </h1>
                </div>

                {/* Fixed Icon Area */}
                <div className="h-20 flex items-center">
                  {skill.icon}
                </div>

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


// import React from "react";
// import { FaPython, FaDocker, FaArrowRight } from "react-icons/fa";

// import { LuBrain } from "react-icons/lu";
// import { SiDjango } from "react-icons/si";
// import { DiDocker } from "react-icons/di";



// const skills = [
//   {
//     title: "Backend Development",
//     description:
//       "Building scalable web applications using Django, Flask, and FastAPI.",
//     tech: "Python • python",
//     icon: <FaPython className="text-2xl md:text-4xl text-yellow-200 my-6" />,
//     span: "md:col-span-2",
//   },
//   {
//     title: "REST API Development",
//     description:
//       "Creating secure and efficient APIs with Django REST Framework, FastAPI, and Flask.",
//     tech: "DRF • Django",
//     icon: <SiDjango className="text-2xl md:text-6xl text-green-500 my-6" />,
     
//   },
//   {
//     title: "Full-Stack Development",
//     description:
//       "Developing responsive applications using React.js, Django, Tailwind and REST APIs.",
//     tech: "React • Django",
//     icon: <LuBrain className="text-2xl md:text-6xl text-violet-500 my-6" />,
//   },
//   {
//     title: "DevOps & Cloud",
//     description:
//       "Deploying and managing applications with Docker, GitHub Actions, PostgreSQL, and Linode.",
//     tech: "Docker • CI/CD",
//     icon: <DiDocker className=" text-2xl md:text-4xl text-blue-600 my-6" />,
//     span: "md:col-span-2",
//   },
// ];

// const Skills = () => {
//   return (
//     <div
//       id="skills"
//       className="w-full min-h-screen bg-black px-4 py-20 md:p-28"
//     >
//       <div className="mx-auto">
//         <div className="flex flex-col justify-center text-center font-bold">
//           <h1 className="text-white text-xl italic">TECHNICAL SKILLS</h1>

//           <h1 className="flex flex-col md:flex-row justify-center items-center text-xl md:text-4xl gap-2">
//             {/* <span className="text-white">
//               Technologies I Work With
//             </span> */}
//           </h1>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 p-2 ">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className={`card-wrapper h-80 md:h-72 cursor-pointer ${skill.span || ""}`}
//             >
//               <div className="card-content h-full p-6 md:p-10 flex flex-col ">
//                 {/* Top */}
//                 <div className="flex justify-between text-gray-500">
//                   <h1 className="text-sm">SKILL</h1>
//                   <h1 className="bg-gray-900 rounded-2xl px-3 py-1 text-sm">
//                     {skill.tech}
//                   </h1>
//                 </div>

//                 {skill.icon}

//                 {/* Content */}
//                 <div className="flex-1">
//                   <h1 className="text-white text-xl font-semibold mb-3">
//                     {skill.title}
//                   </h1>

//                   <p className="text-gray-500">
//                     {skill.description}
//                   </p>
//                 </div>

//                 {/* Bottom */}
//                 <div className="flex items-center gap-2 text-blue-500 pt-4">
//                   <a href="/">Explore</a>
//                   <FaArrowRight />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

