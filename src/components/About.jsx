import React from "react";
import { about } from "../assets";

const About = () => {
  return (
    <section id="hero" className="bg-white text-black w-full h-auto flex">
      <div className="mx-auto flex flex-row-reverse items-center justify-between sm:p-8 p-5 ">
        {/* Left part */}
        <div className="sm:w-1/2 lg:p-20 sm:p-0">
          <h1 className="text-4xl font-bold mb-10 text-[#FF8A00]">
            Who Are We ?
          </h1>
          <p className="text-lg mb-4 text-[#868686] ">
            est simplement du faux texte employé dans la composition et la mise
            en page avant impression. Le Lorem Ipsum est le faux texte standard
            de l'imprimerie depuis les années 1500, quand un imprimeur anonyme
            assembla ensemble des morceaux de texte pour réaliser un livre
            spécimen de polices de texte. Il n'a pas fait que survivre cinq
            siècles, mais s'est aussi adapté à l est simplement du faux texte
            employé dans la composition et la mise en page avant impression. Le
          </p>
        </div>
        {/* Right part */}
        <div className="hidden sm:block w-1/2 lg:p-20 sm:p-10">
          <img src={about} alt="Hero" className="w-2/3 h-auto" />
        </div>
      </div>
    </section>
  );
};

export default About;
