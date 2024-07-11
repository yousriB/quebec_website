import React from "react";
import { pc } from "../assets";
import { useState } from "react";
import contetnts from "../data/services";

const Services = () => {
  const [content, setContent] = useState({
    title: "How Can I started ?",
    paragraph:
      "est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à l",
    imageSrc: pc,
  });

  const handleButtonClick = (title, paragraph, imageSrc) => {
    setContent({ title, paragraph, imageSrc });
  };

  let ima = pc;

  return (
    <section id="services" className="bg-white w-full h-screen my-0">
      <div className=" flex flex-col sm:p-10 p-5">
        <h1 id="titel" className="p-1 text-4xl font-bold mb-10 text-[#FF8A00]">
          What you get?
        </h1>
        <div
          id="buttons"
          className="sm:flex grid gap-2 grid-cols-2 sm:flex-row flex-col px-1 py-5 "
        >
          <button
            className="px-6 lg:py-2 border-[#FF8A00] rounded-2xl mr-5 bg-[#FF8A00] text-white w-[140px]"
            onClick={() =>
              handleButtonClick(
                contetnts[0].title,
                contetnts[0].paragraph,
                contetnts[0].imageSrc
              )
            }
          >
            get satrted
          </button>
          <button
            className="px-6 lg:py-2 border border-[#868686]  mr-5 rounded-2xl text-[#868686] font-medium w-[140px] h-10"
            onClick={() =>
              handleButtonClick(
                contetnts[1].title,
                contetnts[1].paragraph,
                contetnts[1].imageSrc
              )
            }
          >
            Gestion{" "}
          </button>
          <button
            className="px-6 lg:py-2  border border-[#868686]  mr-5 rounded-2xl text-[#868686] font-medium w-[140px] h-10"
            onClick={() =>
              handleButtonClick(
                contetnts[2].title,
                contetnts[2].paragraph,
                contetnts[2].imageSrc
              )
            }
          >
            Informatique
          </button>
          <button
            className="px-6  lg:py-2 border border-[#868686]  mr-5 rounded-2xl text-[#868686] font-medium w-[140px] h-10"
            onClick={() =>
              handleButtonClick(
                contetnts[3].title,
                contetnts[3].paragraph,
                contetnts[3].imageSrc
              )
            }
          >
            Language
          </button>
          <button
            className="px-6 lg:py-2 border border-[#868686] mr-5 rounded-2xl text-[#868686] font-medium w-[140px] h-10"
            onClick={() =>
              handleButtonClick(
                contetnts[4].title,
                contetnts[4].paragraph,
                contetnts[4].imageSrc
              )
            }
          >
            Test
          </button>
        </div>
        <div id="content" className="flex">
          {/* left side */}
          <div
            id="left"
            className="sm:w-1/2 flex flex-col justify-start sm:mt-20 mt-0 p-5 sm:p-0"
          >
            <h1 className=" text-xl font-bold mb-5 text-[#FF8A00]">
              {content.title}
            </h1>
            <p className="text-[#868686] text-lg">{content.paragraph}</p>
          </div>
          {/* right side */}
          <div id="right" className="sm:w-1/2 hidden justify-center sm:flex">
            <img src={content.imageSrc} alt="pc" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
