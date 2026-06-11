import React from 'react'
import profile from '../assets/portfolio_profile.jpg'

const Home = () => {
  return (
    <div
      id="home"
      className="w-full min-h-screen bg-slate-950 text-white px-6 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${profile})` }}
    >
      <div className="max-w-6xl min-h-screen mx-auto flex flex-col justify-center items-center gap-8">
        <h1 className="flex space-x-3 text-center md:text-6xl font-extrabold mt-48">
          <span className="text-white italic">Anything</span>
          <span className="text-blue-300 italic">built here</span>
        </h1>

        <h1 className="text-center md:text-2xl max-w-5xl italic">
          <span className="md:block">Man is made by his belief.</span>
          <span className="block">As he believes, so he is.</span>
        </h1>
      </div>
    </div>
  )
}

export default Home
// import React from 'react'
// import profile from '../assets/portfolio_profile.jpg'

// const Home = () => {
//   return (
//     <div id="home" className='w-full min-h-screen bg-slate-950 text-white px-6 bg-[url(https://i.pinimg.com/736x/a7/a5/77/a7a577becc087261dc87e25562f3080e.jpg)] relative bg-cover bg-center bg-no-repeat'>
//       <div className='max-w-6xl min-h-screen mx-auto flex flex-col justify-center items-center gap-8 '>
//          <h1 className='flex space-x-3 text-center md:text-6xl font-extrabold mt-48'>
//           <span className='text-white italic'>Anything</span>
//           <span className='text-blue-300 italic'>Builds here</span>
//          </h1>
//         <h1 className='text-center md:text-2xl max-w-5xl'>
//           <span className='md:block italic'>Man is made by his belief</span>
//           <span className='block italic'>so he's.</span>
//         </h1>
//       </div>
//     </div>
//   )
// }

// export default Home