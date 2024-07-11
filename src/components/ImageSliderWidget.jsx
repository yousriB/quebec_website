import React, { useEffect, useRef } from "react";

const ImageSliderWidget = () => {
  return (
    <section id="imagesslides" className="flex p-5 sm:p-10 flex-col">
      <div className="flex flex-col sm:flex-row w-full">
        {/* left side */}
        <div className=" sm:w-1/2 sm:p-5">
          <h1 className="text-xl mb-5 text-[#FF8A00]    ">INTEGRATIONS</h1>
          <p className="text-3xl font-medium">
            Embed your videos into <br /> your favorite tools
          </p>
        </div>
        {/* right side */}
        <div className="sm:w-1/2 sm:p-5">
          <p className="text-md mb-5 mt-10">
            Streamline your video creation process by embedding your videos into
            your authoring tool, LMS, LXP and more.
          </p>
          <a href="#" className="text-[#FF8A00]">
            Explore all integrations
          </a>
        </div>
      </div>
      {/* bottom side */}
      <div className="">
        <div class=" mx-auto grid sm:grid-cols-9 grid-cols-4 gap-5 sm:gap-0 sm:p-10 my-10 max-w-4xl">
          <div class="w-dyn-item">
            <img
              src="https://assets-global.website-files.com/61dc0796f359b6eeecc06eab/6405b478fd5ec341b4e154b7_intercom-logo-B222146C9B-seeklogo.com.png"
              class=" w-16 h-16 rounded-lg object-cover"
            />
          </div>
          <div class="w-dyn-item">
            <img
              src="https://assets-global.website-files.com/61dc0796f359b6eeecc06eab/649d7a9d05505718a7a0b146_Integration-Moodle.svg"
              class=" w-16 h-16 rounded-lg object-cover"
            />
          </div>
          <div class="w-dyn-item">
            <img
              src="https://assets-global.website-files.com/61dc0796f359b6eeecc06eab/649d7aac44518b1dd2f08398_Integration-PP.svg"
              class=" w-16 h-16 rounded-lg object-cover"
            />
          </div>
          <div class="w-dyn-item">
            <img
              src="https://assets-global.website-files.com/61dc0796f359b6eeecc06eab/649d7a805c2b81b72805491d_Integration-Hubspot.svg"
              class=" w-16 h-16 rounded-lg object-cover"
            />
          </div>
          <div class="w-dyn-item">
            <img
              src="https://assets-global.website-files.com/61dc0796f359b6eeecc06eab/62553466b01078151b169eac_notion-2.svg"
              class=" w-16 h-16 rounded-lg object-cover"
            />
          </div>
          <div class="w-dyn-item">
            <img
              src="https://assets-global.website-files.com/61dc0796f359b6eeecc06eab/6253ea4357193608f57e9844_1625154052471.jpeg"
              class=" w-16 h-16 rounded-lg object-cover"
            />
          </div>
          <div class="w-dyn-item">
            <img
              src="https://assets-global.website-files.com/61dc0796f359b6eeecc06eab/6253e597f0326c0f90701498_docebo.svg"
              class=" w-16 h-16 rounded-lg object-cover"
            />
          </div>
          <div class="w-dyn-item">
            <img
              src="https://assets-global.website-files.com/61dc0796f359b6eeecc06eab/6253e4e45994865c77c3c8a1_articulate-storyline-3.svg"
              class=" w-16 h-16 rounded-lg object-cover"
            />
          </div>
          <div class="w-dyn-item">
            <img
              src="https://assets-global.website-files.com/61dc0796f359b6eeecc06eab/6250523035bd09380f9418be_360learning.svg"
              class=" w-16 h-16 rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSliderWidget;
