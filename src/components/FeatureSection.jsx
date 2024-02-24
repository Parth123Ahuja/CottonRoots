import React from "react";

const FeaturesSection = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
      />
      <section className="w-full bg-[#f7f5ed] py-8">
        <div className="container mx-auto text-center px-4">
          {/* <h2 className="text-2xl font-bold text-gray-800 mb-4">Features</h2> */}
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-8 shadow-md rounded-md">
                <i className=" fa-solid fa-flag text-4xl text-red-500 mb-4"></i>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Vision</h3>
                <p className="text-gray-600">
                  To provide every individual the freedom and ability to express
                  themselves candidly.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-8 shadow-md rounded-md">
                <i className="fas fa-globe-americas text-4xl text-red-500 mb-4"></i>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Mission
                </h3>
                <p className="text-gray-600">
                  To provide high quality fashionable garments for everyone.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-8 shadow-md rounded-md">
                <i class="fa-solid fa-shirt text-4xl mb-4 text-red-500"></i>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Products
                </h3>
                <p className="text-gray-600">
                  Ladies garments, Men’s garments, Kids garments, Home
                  furnishing products
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
