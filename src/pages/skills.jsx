


import React from 'react'
import { AiFillAndroid } from "react-icons/ai";
import { LuBrain } from "react-icons/lu";
import { SiDjango } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="w-full min-h-screen bg-black p-4 md:p-20">
      <div className="mx-auto">

        <div className='flex flex-col justify-center text-center font-bold'>
          <h1 className='text-blue-500 text-2xl md:text-xl font-semibold'>
            WHAT WE OFFER
          </h1>

          <h1 className='flex flex-col md:flex-row justify-center items-center text-2xl md:text-4xl font-bold gap-2'>
            <span className='text-white'>
              Everything you need to level up
            </span>
            <span className='text-blue-500'>
              skills
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">

          {/* Card 1 */}
          <div className="bg-slate-950 rounded-2xl p-6 md:p-10 md:col-span-2 h-72 cursor-pointer border-2 shadow-md hover:border-orange-300 transition-colors duration-200">
            <div className="flex justify-between text-gray-500">
              <h1 className='lg:text-sm'>COURSES</h1>
              <h1 className='bg-gray-900 rounded-2xl p-1'>40+ courses</h1>
            </div>

            <AiFillAndroid className="text-4xl text-blue-500 my-6" />

            <div className='flex flex-col gap-4 md:gap-2'>
              <h1 className='text-white text-2xl md:text-xl font-semibold'>
                Web Development
              </h1>

              <h1 className='text-gray-500 font-medium md:font-normal'>
                From HTML basics to full-stack apps.React, Next, Node
              </h1>
            </div>

            <div className='flex text-blue-500 font-medium md:text-normal mt-5'>
              <a href="/">Explore</a>
              <FaArrowRight className='mt-1' />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-950 rounded-2xl p-6 md:p-10 h-72 cursor-pointer border-2 shadow-md hover:border-indigo-600 transition-colors duration-200">
            <div className="flex justify-between text-gray-500 font-normal text-sm">
              <h1>COURSES</h1>
              <h1 className='bg-gray-900 rounded-2xl p-1'>40+ courses</h1>
            </div>

            <LuBrain className="text-4xl text-violet-500 my-6" />

            <div className='flex flex-col gap-4 md:gap-2'>
              <h1 className='text-white text-2xl md:text-xl font-semibold'>
                AI & Machine Learning
              </h1>

              <h1 className='text-gray-500 font-medium md:font-normal'>
                Learn AI, Machine Learning and modern tools.
              </h1>
            </div>

            <div className='flex text-blue-500 font-medium md:text-normal mt-5'>
              <a href="/">Explore</a>
              <FaArrowRight className='mt-1' />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-950 rounded-2xl p-6 md:p-10 h-72 cursor-pointer border-2 shadow-md hover:border-violet-600 transition-colors duration-200">
            <div className="flex justify-between text-gray-500">
              <h1>COURSES</h1>
              <h1 className='bg-gray-900 rounded-2xl p-1'>40+ courses</h1>
            </div>

            <SiDjango className="text-4xl text-green-400 my-6" />

            <div className='flex flex-col gap-4 md:gap-2'>
              <h1 className='text-white text-2xl md:text-xl font-semibold'>
                Django Development
              </h1>

              <h1 className='text-gray-500 font-medium md:font-normal'>
                Build scalable backend applications with Django.
              </h1>
            </div>

            <div className='flex text-blue-500 font-medium md:text-normal mt-5'>
              <a href="/">Explore</a>
              <FaArrowRight className='mt-1' />
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-slate-950 rounded-2xl p-6 md:p-10 md:col-span-2 h-72 cursor-pointer border-2 shadow-md hover:border-green-600 transition-colors duration-200">
            <div className="flex justify-between text-gray-500">
              <h1>COURSES</h1>
              <h1 className='bg-gray-900 rounded-2xl p-1'>40+ courses</h1>
            </div>

            <SiFastapi className="text-4xl text-orange-500 my-6" />

            <div className='flex flex-col gap-4 md:gap-2'>
              <h1 className='text-white text-2xl md:text-xl font-semibold'>
                FastAPI Development
              </h1>

              <h1 className='text-gray-500 font-medium md:font-normal'>
                Build high-performance APIs using FastAPI and Python.
              </h1>
            </div>

            <div className='flex text-blue-500 font-medium md:text-normal mt-5'>
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
