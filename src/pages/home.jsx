import React from 'react'

const Home = () => {
  return (
    <div className='w-full min-h-screen bg-slate-950 text-white px-6'>
      <div className='max-w-6xl min-h-screen mx-auto flex flex-col justify-center items-center gap-8'>
         <h1 className='flex space-x-3 text-center md:text-6xl font-extrabold'>
          <span className='text-white'>REPUBLIC OF </span>
          <span className='text-blue-300'>PROGRAMMERS</span>
         </h1>
        <h1 className='text-center md:text-2xl max-w-5xl'>
          <span className='md:block'>Master modern development through hands-on projects, real-world </span>
          <span className='block'>challenges, and a community built for programmers who ship</span>
          <span className='block'>things that matter.</span>
        </h1>

        <div className='flex gap-4 md:text-2xl text-white'>
          <button className='bg-blue-300 hover:bg-blue-700 px-6 py-3 rounded-xl font-medium'>
            Explore Courses
          </button>

          <button className='bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl font-medium'>
            Explore Blogs
          </button>
        </div>

      </div>
    </div>
  )
}

export default Home