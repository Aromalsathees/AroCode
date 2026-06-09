import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="w-full min-h-screen bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center md:gap-10 gap-7 text-white pt-20 px-4">

              <div>
                <img className='md:w-2xl h-auto rounded-2xl' src="https://images.hdqwalls.com/wallpapers/i-am-ironman-4k-35.jpg" alt="" />
              </div>
              
              <div className="flex flex-col justify-start md:gap-2">
                    <h1 className='text-blue-950 md:mt-5 font-extrabold'>ABOUT</h1>
                    <h1 className='flex gap-1 font-sans font-bold md:text-5xl mt-5 italic'>
                      <span className="block text-white">Hey, I'm </span>
                      <span className="block text-blue-950"> aromal .</span>
                    </h1>
                    <div className="flex flex-col gap-3 mt-5 text-gray-500">
                       <p>I'm a Senior Software Engineer who genuinely can't stop learning — new frameworks, new tools, new ways of thinking about problems</p>
                       <p>That's why I built CodeWithJoe — real skills, real code, taught by someone actively in the trenches every day.</p>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-950 w-fit px-2 py-2 rounded-lg cursor-pointer mt-8 ">
                       <button>More about me</button>
                        <FaArrowRight />
                    </div>
              </div>

        </div>
    </div>
  )
}

export default Profile