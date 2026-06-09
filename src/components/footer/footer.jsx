

import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 p-6 lg:p-20  border border-gray-900 pt-10">
      
      <div className="md:flex justify-between mx-auto ">

         <div className='flex flex-col gap-7 font-medium md:font-normal'>
            <h1><span className='text-white text-2xl md:text-4xl font-bold italic'>Aro</span><span className='text-cyan-700 text-2xl md:text-4xl font-bold italic'>Code</span></h1>
            <h1 className='text-gray-500 font-medium md:font-normal'>Practical programming education for developers who build things that actually ship.</h1>

             <div className="flex gap-2 mt-2 md:gap-5">
              <FaInstagram className='text-gray-500 text-2xl md:text-4xl font-bold' />
              <CiLinkedin className='text-gray-500 text-2xl md:text-4xl font-bold'/>
              <FaGithub className='text-gray-500 text-2xl md:text-4xl font-bold'/>
             </div> 

          </div>




        <div className='flex flex-col gap-10 md:flex-row md:gap-48 text-gray-500 mt-5'>
            <ul className='flex flex-col gap-2 md:gap-5 font-medium md:font-normal'>
                <li className='text-white font-bold text-sm font-sans' >QUICK LINKS</li>
                <li>Blog</li>
                <li>Roadmaps</li>
                <li>Community</li>
            </ul>
            <ul className='flex flex-col gap-2 md:gap-5 font-medium md:font-normal'>
                <li className='text-white font-bold text-sm font-sans'>QUICK LINKS</li>
                <li>Blog</li>
                <li>Roadmaps</li>
                <li>Community</li>
            </ul>
            <ul className='flex flex-col gap-2 md:gap-5 font-medium md:font-normal'>
                <li className='text-white font-bold text-sm font-sans'>QUICK LINKS</li>
                <li>Blog</li>
                <li>Roadmaps</li>
                <li>Community</li>
            </ul>
        </div>
     </div>
     
        <div className="flex flex-col md:flex-row md:justify-between border-t border-gray-900  shadow-lg text-white mt-10 ">
            <div className="flex flex-col gap-2 mt-5">
             <h1 className='font-bold text-xl mt-5 font-sans'>stay in the loop</h1>
             <h1 className='text-gray-500 font-medium md:font-normal '>Dev tips, new courses, and tools — straight to your inbox.</h1>
             </div>
             <div className='flex gap-5 mt-10 md:mt-15 font-medium md:font-normal'>
                <input className='border rounded-xl border-gray-900 w-3xl h-10 px-3' type="text" placeholder='your@email.com' />
                <button className='bg-blue-950 w-fit px-2 py-2 rounded-xl '>subscribe</button>
             </div>
        </div>

        <div className="flex justify-between border-t border-gray-900 shadow-lg text-gray-500 font-medium md:font-normal mt-10 md:pt-10">
              <h1>© 2026 AroCode. All rights reserved.</h1>
              <h1 className=" italic">Built for builders.</h1>
        </div>

    </footer>
  )
}

export default Footer