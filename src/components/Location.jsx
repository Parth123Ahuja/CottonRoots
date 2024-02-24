import React from "react";

const Location = () => {
  return (
    <div className="bg-[#f7f5ed] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Location
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Office and Factory
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Come and Visit Us
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {/* Address */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <i className="fas fa-globe"></i>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Office Address
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  9/A, Humayun Pur , Villa No 1398
                  <br />
                  Safderjung Enclave, New Delhi 110029
                </dd>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <i className="fas fa-phone"></i>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Phone number
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  0091 – 011 - 29913319
                </dd>
              </div>
            </div>

            {/* Email */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <i className="fas fa-envelope"></i>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Email
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  anupam@sandhyaoverseas.com
                  <br />
                  admin@sandhyaoverseas.com
                </dd>
              </div>
            </div>

            {/* Store Hours */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <i className="fas fa-clock"></i>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Factory Address
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  D-190 , Krishna Park
                  <br />
                  Devil Road Khanpur , New Delhi 110062
                  <br />
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Location;
