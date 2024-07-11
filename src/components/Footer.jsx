import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center p-2 px-3">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Your WebsiteName
        </p>
        <p className="flex items-center justify-center">
          Create with{" "}
          <a href="" className="flex">
            <ion-icon name="heart-outline"></ion-icon>
          </a>{" "}
          by yousri
        </p>
      </div>
    </footer>
  );
};

export default Footer;
