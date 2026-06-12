import React from "react";
import profile from "../assets/portfolio_profile.jpg";
import lap_profile from "../assets/f0d23955-e7a4-4d36-897a-766dd46cf339.png";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
      
  {/* Mobile View - Unchanged */}
  <div
    id="home"
    className="md:hidden w-full min-h-screen text-white px-6 relative bg-contain bg-center bg-no-repeat bg-slate-950"
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

  {/* Desktop View */}
  {/* Desktop View */}
<div
  id="home"
  className="hidden md:block relative w-full min-h-screen overflow-hidden text-white px-6 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${lap_profile})` }}
>
  <div className="max-w-6xl min-h-screen mx-auto flex flex-col justify-center items-center gap-5">

    <h1 className="text-2xl font-bold leading-tight text-center">
      <span className="text-white">Republic of </span>

      <TypeAnimation
        sequence={[
          "ENGINEERS",
          2500,
          "",
          500,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        cursor={true}
        className="text-blue-500"
      />
    </h1>

    <p className="flex flex-col mt-6 text-xl text-gray-300 font-semibold">
      <span>Master modern development through hands-on projects,</span>
      <span>real-world challenges, and a community built for programmers.</span>
      <span className="text-center">things that matter.</span>
    </p>

    <div className="flex gap-5 mt-4">
      <button className="bg-blue-500 hover:bg-blue-600 transition text-white rounded-lg py-2 px-8 flex items-center gap-3 font-semibold">
        <span>Blogs</span>
        <FaArrowRight />
      </button>

      <button className="bg-blue-950 hover:bg-blue-800 transition text-white rounded-lg py-2 px-8 flex items-center gap-3 font-semibold">
        <span>Course</span>
        <FaArrowRight />
      </button>
    </div>

  </div>
</div>

</>
  );
};

export default Home;