import React from "react";
import styles, { layout } from "../style";
import { hero } from "../assets";

const Hero = () => {
  return (
    <section id="hero" className="bg-white text-black w-full h-screen flex">
      <div className="container mx-auto flex items-center justify-between sm:p-8 p-0 ">
        {/* Left part */}
        <div className="sm:w-1/2 lg:p-20 sm:p-0">
          <p className="text-lg mb-2 text-[#4A4A4A]">
            {" "}
            <span className="text-[#FF8A00]">
              <ion-icon name="checkmark-circle-outline"></ion-icon>
            </span>{" "}
            Special offer for first Time Customers
          </p>
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-5 text-[#282828]">
            Learn on your schedule from any device
            <span className="text-[#9F68F8]">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </span>
          </h1>
          <p className="text-lg mb-5 text-[#868686]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            laoreet vehicula ex, vitae tristique orci iaculis nec.
          </p>
          <div className="flex">
            <button className="px-6 py-3 border-[#FF8A00] rounded-2xl mr-5 bg-[#FF8A00] text-white">
              Get Started
            </button>
            <button className="px-6 py-3 border border-[#868686] rounded-2xl text-[#4A4A4A]">
              Discover
            </button>
          </div>
        </div>
        {/* Right part */}
        <div className="hidden sm:block w-1/2 lg:p-20 sm:p-10">
          <img src={hero} alt="Hero" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
