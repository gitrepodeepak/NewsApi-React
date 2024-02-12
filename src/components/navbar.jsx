import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-evenly bg-gray-950">
        <div className="block text-center mt-4 ml-4 cursor-pointer">
          <h1><Link to="/">News API</Link></h1>
        </div>
        <div>
          <ul className="flex flex-col items-center lg:flex-row *:text-sm mx-2 *:m-2 *:transition-all *:duration-300 *:ease-in *:border *:border-solid *:p-2 *:rounded-lg *:cursor-pointer ">
            <li className="hover:bg-gray-700"><Link to="/">Home</Link></li>
            <li className="hover:bg-gray-700"><Link to="business">Business</Link></li>
            <li className="hover:bg-gray-700"><Link to="entertainment">Entertainment</Link></li>
            <li className="hover:bg-gray-700"><Link to="health">Health</Link></li>
            <li className="hover:bg-gray-700"><Link to="science">Science</Link></li>
            <li className="hover:bg-gray-700"><Link to="sports">Sports</Link></li>
            <li className="hover:bg-gray-700"><Link to="technology">Technology</Link></li>
            <li className="hover:bg-gray-700"><Link to="/about">About</Link></li>
            <li className="hover:bg-gray-700"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}
