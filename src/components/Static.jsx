import React from "react";

const Static = () => {
  return (
    <section id="static" className="flex justify-around sm:p-10 p-5">
      <div className="flex flex-col items-center  w-1/3">
        <h1 className="sm:text-5xl text-3xl font-bold mb-2 text-[#FF8A00]">
          1546+
        </h1>
        <p className="text-[#494949] text-md font-semibold">
          Exercise completed
        </p>
      </div>
      <div className="flex flex-col items-center w-1/3">
        <h1 className="sm:text-5xl text-3xl font-bold mb-2 text-[#FF8A00]">
          2450+
        </h1>
        <p className="text-[#494949] text-md font-semibold">
          Exercise completed
        </p>
      </div>
      <div className="flex flex-col items-center w-1/3">
        <h1 className="sm:text-5xl text-3xl font-bold mb-2 text-[#FF8A00]">
          60+
        </h1>
        <p className="text-[#494949] text-md font-semibold">
          Certification International
        </p>
      </div>
    </section>
  );
};

export default Static;
