import React from "react";

const GallerySection = ({ title, image }) => {
  return (
    <section className="flex items-center mt-32 mb-32 bg-[#f7f5ed] font-poppins">
      <div className="container p-4 mx-auto">
        <h2 className="pb-4 text-4xl font-bold text-center text-[#741a14]">
          {title}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
