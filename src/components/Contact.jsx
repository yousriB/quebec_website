import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="flex flex-wrap sm:p-10 p-2 ">
        <div className="sm:w-1/2 flex flex-col ">
          <h1 className="text-3xl font-bold mb-5 text-[#FF8A00]">Contact Us</h1>
          <p className="text-lg mb-4 text-[#868686]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            recusandae
          </p>
          <div className="grid gap-10 mt-10">
            <a href="" className="text-[#868686] flex ">
              <span className="text-2xl">
                <ion-icon name="call-outline"></ion-icon>
              </span>
              <span className="ml-5">+21621338785</span>
            </a>
            <a href="" className="text-[#868686] flex">
              <span className="text-2xl">
                <ion-icon name="location-outline"></ion-icon>
              </span>
              <span className="ml-5 ">Location : Tunisie gabes</span>
            </a>
            <a href="" className="text-[#868686] flex">
              <span className="text-2xl">
                <ion-icon name="mail-outline"></ion-icon>
              </span>
              <span className="ml-5">exempleemail@gmail.com</span>
            </a>
            <a href="" className="text-[#868686] flex">
              <span className="text-2xl">
                <ion-icon name="time-outline"></ion-icon>
              </span>
              <span className="ml-5"> 8:00AM to 5:00PM</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col w-full sm:w-1/2 p-5 text-[#868686]">
          <span>Name</span>
          <input type="text" className=" border-2 rounded-md p-1 my-2" />
          <span>Email</span>
          <input type="text" className=" border-2 rounded-md p-1 my-2" />
          <span>Message</span>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className=" border-2 rounded-md p-1 my-2"
          ></textarea>
          <button className="border p-2 mt-5 sm:mt-10 bg-[#FF8A00] text-white font-medium">
            Envoyer
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
