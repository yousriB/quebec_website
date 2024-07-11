import React from "react";
import { person } from "../assets";

const Testemonial = () => {
  return (
    <section className="w-full h-auto flex flex-col  items-center ">
      <h1 className="text-4xl font-bold mb-10 text-[#FF8A00]">Testemonial</h1>
      <p className="text-lg mb-4 text-[#868686] text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
        deleniti?
      </p>
      <div
        id="cards"
        className="flex sm:flex-row flex-col gap-10 p-10 flex-wrap"
      >
        <div
          id="card"
          className=" bg-white text-[#868686] rounded-xl p-10 w-[300px] shadow-slate-200 shadow-lg"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, ducimus labore rerum tenetur dolorem ex inventore
            alias dignissimos libero harum.
          </p>
          <div className="flex flex-row mt-10">
            <img
              src={person}
              alt=""
              className="w-10 h-10 rounded-full mr-2 object-cover "
            />
            <div id="information" className="flex flex-col">
              <h1 className="text-[#6e6e6e] font-medium">Yousri Ben ali</h1>
              <p className=" text-sm text-[#FF8A00]">FrontEnd deeloper</p>
            </div>
          </div>
        </div>
        <div
          id="card"
          className=" bg-white text-[#868686] rounded-xl p-10 w-[300px] shadow-slate-200 shadow-lg "
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, ducimus labore rerum tenetur dolorem ex inventore
            alias dignissimos libero harum.
          </p>
          <div className="flex flex-row mt-10">
            <img
              src={person}
              alt=""
              className="w-10 h-10 rounded-full mr-2 object-cover "
            />
            <div id="information" className="flex flex-col">
              <h1 className="text-[#6e6e6e] font-medium">Yousri Ben ali</h1>
              <p className=" text-sm text-[#FF8A00]">FrontEnd deeloper</p>
            </div>
          </div>
        </div>
        <div
          id="card"
          className=" bg-white text-[#868686] rounded-xl p-10 w-[300px] shadow-slate-200 shadow-lg"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, ducimus labore rerum tenetur dolorem ex inventore
            alias dignissimos libero harum.
          </p>
          <div className="flex flex-row mt-10 ">
            <img
              src={person}
              alt=""
              className="w-10 h-10 rounded-full mr-2 object-cover "
            />
            <div id="information" className="flex flex-col">
              <h1 className="text-[#6e6e6e] font-medium">Yousri Ben ali</h1>
              <p className=" text-sm text-[#FF8A00]">FrontEnd deeloper</p>
            </div>
          </div>
        </div>
        <div
          id="card"
          className=" bg-white text-[#868686] rounded-xl p-10 w-[300px] shadow-slate-200 shadow-lg"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, ducimus labore rerum tenetur dolorem ex inventore
            alias dignissimos libero harum.
          </p>
          <div className="flex flex-row mt-10 ">
            <img
              src={person}
              alt=""
              className="w-10 h-10 rounded-full mr-2 object-cover "
            />
            <div id="information" className="flex flex-col">
              <h1 className="text-[#6e6e6e] font-medium">Yousri Ben ali</h1>
              <p className=" text-sm text-[#FF8A00] ">FrontEnd deeloper</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testemonial;
