import React from "react";
import image1 from "../assets/Banner1.jpeg";

const Banner = () => {
  return (
    <section className="shadow-sm font-poppins dark:bg-gray-900 relative">
      <div
        className="flex items-center justify-center w-full h-screen text-center bg-center bg-cover relative"
        style={{
          backgroundImage: `url(${image1})`,
          height: "560px",
        }}
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gray-700 opacity-50"></div>
        <div className="z-10 px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center relative">
            <h2 className="mb-6  font-medium font-Homemade text-5xl leading-10 tracking-tight text-[#f7f5ed] md:text-6xl relative z-10">
              Cotton Roots
            </h2>
            <p className="mb-6 tracking-wide text-gray-300 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5 relative z-10">
              Delivering freedom and quality
            </p>
            <div className="justify-center sm:flex relative z-10">
              <div className="">
                <a
                  href="/about"
                  className="flex items-center justify-center w-full px-8 py-3 text-[#f7f5ed] bg-[#741a14] rounded-md shadow hover:bg-[#9c2f28] relative z-10"
                >
                  About Us
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/dresses"
                  className="flex items-center justify-center w-full px-8 py-3 text-[#741a14] hover:text-[#f7f5ed]  hover:bg-[#741a14] bg-gray-100 rounded-md shadow hover:text-hover:bg-blue-500 relative z-10"
                >
                  Collections
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
