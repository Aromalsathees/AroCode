import React from "react";
import profile from "../assets/portfolio_profile.jpg";
import lap_profile from "../assets/f0d23955-e7a4-4d36-897a-766dd46cf339.png";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { FiSettings } from "react-icons/fi";

const Home = () => {
  return (
    <>
      
  {/* Mobile View - Unchanged */}
  <div
    id="home"
    className="md:hidden w-full min-h-screen text-white px-6  pt-[-50]  relative  bg-center bg-no-repeat bg-transparent  bg-cover "
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
<div
  id="home"
  className="hidden md:block relative w-full min-h-screen overflow-hidden text-white px-6 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${lap_profile})` }}
>
  <div className="max-w-6xl min-h-screen mx-auto flex flex-col justify-center items-center gap-5">

    <h1 className="text-2xl font-bold leading-tight text-center ">
      <span className="text-white">ANYTHING </span>

      <TypeAnimation
        sequence={[
          "BUILT HERE ",
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

    <p className="flex flex-col mt-6 text-2xl italic font-bold text-gray-300 ">
      <span>I am shaped by my beliefs.</span>
      <span className="text-center">As I believe,</span>
      <span className="text-center">so I become.</span>
    </p>

    <div className="flex gap-5 mt-4">
      <button className="bg-blue-500 hover:bg-blue-600 transition text-white rounded-lg py-2 px-13 flex items-center gap-2 font-normal">
        <span>Blogs</span>
        <FiSettings />
      </button>

      <button className="bg-blue-950 hover:bg-blue-800 transition text-white rounded-lg py-2 px-13 flex items-center gap-2 font-normal">
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