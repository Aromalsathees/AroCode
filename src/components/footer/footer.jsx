

import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 p-6 lg:p-40  border border-gray-900">
      
      <div className="md:flex justify-between mx-auto ">

         <div className='flex flex-col gap-7 font-extrabold text-2xl md:text-4xl'>
            <h1><span className='text-white'>Code</span> <span className='text-cyan-700'>witharomal</span></h1>
            <h1 className='text-gray-500 font-normal text-base md:text-2xl'>Practical programming education for developers who build things that actually ship.</h1>

            <div className="flex gap-2 mt-2 md:gap-5">
              <FaInstagram className='text-gray-500' />
              <CiLinkedin className='text-gray-500'/>
              <FaGithub className='text-gray-500'/>
             </div>
            </div>

        <div className='flex flex-col gap-10 md:flex-row md:gap-48 text-gray-500 mt-5'>
            <ul className='flex flex-col gap-2 md:gap-10 md:text-2xl font-normal text-base'>
                <li className='text-white font-bold'>QUICK LINKS</li>
                <li>Blog</li>
                <li>Roadmaps</li>
                <li>Community</li>
            </ul>
            <ul className='flex flex-col gap-2 md:gap-10 md:text-2xl font-normal text-base'>
                <li className='text-white font-bold '>QUICK LINKS</li>
                <li>Blog</li>
                <li>Roadmaps</li>
                <li>Community</li>
            </ul>
            <ul className='flex flex-col gap-2 md:gap-10 md:text-2xl font-normal text-base'>
                <li className='text-white font-bold'>QUICK LINKS</li>
                <li>Blog</li>
                <li>Roadmaps</li>
                <li>Community</li>
            </ul>
        </div>
     </div>
     
        <div className="flex flex-col md:flex-row md:justify-between border-t border-gray-900  shadow-lg text-white md:text-2xl font-normal mt-10 ">
            <div className="flex flex-col gap-2 mt-5">
             <h1 className='md:text-2xl font-medium mt-5'>stay in the loop</h1>
             <h1 className='text-gray-500 font-normal text-base md:text-2xl '>Dev tips, new courses, and tools — straight to your inbox.</h1>
             </div>
             <div className='flex gap-5 mt-7 font-normal text-xl'>
                <input className='border rounded-xl border-gray-900 p-2 md:w-5xl md:h-12' type="text" placeholder='your@email.com' />
                <button className='bg-blue-500 md:p-2 p-1 rounded-xl md:w-max md:h-12 w-sm'>subscribe</button>
             </div>
        </div>

        <div className="flex justify-between border-t border-gray-900 shadow-lg text-gray-500 font-normal mt-10">
              <h1 className="text-gray-500 font-normal text-base md:text-xl  mt-3">© 2026 CodeWithJoe. All rights reserved.</h1>
              <h1 className=" text-gray-500 font-normal text-base md:text-xl  mt-3 italic">Built for builders.</h1>
        </div>

    </footer>
  )
}

export default Footer