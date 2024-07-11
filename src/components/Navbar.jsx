import React, { useState } from "react";
import styles from "../style";
import { logo } from "../assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white rounded-3xl p-4">
      <div className="container flex items-center justify-between mx-auto font-medium">
        <div className="flex items-center justify-center space-x-4 text-black text-xl font-extrabold">
          <img src={logo} alt="logo" className="w-[30px]" />
          <h1>OXFORE</h1>
        </div>

        <div className="hidden md:flex flex-grow-0 items-center justify-center space-x-10 text-[#4A4A4A]">
          <a href="#" className="hover:text-[#FF8A00] transition-colors">
            Home{" "}
          </a>
          <a href="#" className="hover:text-[#FF8A00] transition-colors">
            About
          </a>
          <a href="#" className="hover:text-[#FF8A00] transition-colors">
            Services
          </a>
          <a href="#" className="hover:text-[#FF8A00] transition-colors">
            Contact
          </a>
        </div>

        <div className="px-4 py-2 border border-black rounded-2xl hidden md:flex hover:border-[#FF8A00] hover:text-[#FF8A00]">
          <button>Sign Up</button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleNavbar}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* mobile menu */}
      {isOpen && (
        <div className="flex mt-4 items-center flex-col font-medium border bg-white  border-black min-w-[200px] absolute right-[15%] z-20 rounded-3xl shadow-2xl  ">
          <a href="" className="py-2 hover:text-[#FF8A00] transition-colors">
            Home
          </a>
          <a href="" className="py-2 hover:text-[#FF8A00] transition-colors">
            About
          </a>
          <a href="" className="py-2 hover:text-[#FF8A00] transition-colors">
            Services
          </a>
          <a href="" className="py-2 hover:text-[#FF8A00] transition-colors">
            Contact
          </a>
          <a href="" className="py-2">
            <button className="px-4 py-2 border border-black rounded-2xl hover:text-white hover:bg-[#FF8A00] hover:border-white">
              Sign Up
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
