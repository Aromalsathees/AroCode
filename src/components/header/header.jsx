import React from "react";

const Header = () => {
  return (

    <nav className="w-full bg-slate-950 p-6">
        <div className="max-w-7xl mx-auto text-white md:text-2xl">

              <ul className="flex flex-col sm:flex-col md:flex-row gap-10 justify-around md:font-light">
                <h1 className="md:text-4xl">
                <span className=" text-white">code</span>
                <span className="text-cyan-700">witharomal</span>
                </h1>

                 <li className="hover:bg-gray-500 rounded-2xl p-3">Home</li>
                 <li className="hover:bg-gray-500 rounded-2xl p-3">about</li>
                 <li className="hover:bg-gray-500 rounded-2xl p-3">Home</li>
                 <li className="hover:bg-gray-500 rounded-2xl p-3">Home</li>

                 <input className="rounded-4xl border-2 p-2 w-full" type="text" placeholder="enter text"/>
                 
              </ul>
        </div>
    </nav>
    
  );
};

export default Header;