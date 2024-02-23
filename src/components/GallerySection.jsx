import React from "react";
import dress1 from "../assets/Dress/Picture1.jpg";
import dress2 from "../assets/Dress/Picture2.jpg";
import dress3 from "../assets/Dress/Picture3.jpg";
import dress4 from "../assets/Dress/Picture4.jpg";
import dress5 from "../assets/Dress/Picture5.jpg";
import dress6 from "../assets/Dress/Picture6.jpg";
import dress7 from "../assets/Dress/Picture7.jpg";
import dress8 from "../assets/Dress/Picture8.jpg";

const image = [
  {
    img: dress1,
  },
  {
    img: dress2,
  },
  {
    img: dress3,
  },
  {
    img: dress4,
  },
  {
    img: dress5,
  },
  {
    img: dress6,
  },
  {
    img: dress7,
  },
  {
    img: dress8,
  },
];

const GallerySection = () => {
  return (
    <section className="flex items-center  bg-[#f7f5ed] font-poppins">
      <div className="container p-4 mx-auto">
        <h2 className="pb-4 text-4xl font-bold text-center text-[#741a14]">
          Our Gallery
        </h2>
        <div className="mx-auto mb-10 border-b border-red-700 w-44 dark:border-gray-400"></div>
        <div className="grid grid-cols-1 mt-8 lg:grid-cols-4 md:grid-cols-2">
          {image.map((item) => (
            <div className="relative overflow-hidden shadow-lg group">
              <img
                src={item.img}
                className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center duration-500 w-full h-[350px] sm:h-[500px]"
                alt=""
              />
              <div className="absolute inset-0 z-0 group-hover:bg-black opacity-60"></div>
              <div className="absolute hidden p-4 text-center content left-4 bottom-4 right-4 group-hover:block">
                <a
                  href="/dresses"
                  className="mb-2 text-2xl font-semibold text-gray-200 dark:text-white "
                >
                  Lorem ipsum
                </a>
                <h2 className="mb-0 text-sm font-light text-gray-300 dark:text-gray-300 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
