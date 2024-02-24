import React from "react";
import { Footer } from "../components/Footer";
import DetailProduction from "../components/DetailProduction";
import Machine from "../components/Machine";
import img from "../assets/Banner1.jpeg";
import FeaturesSection from "../components/FeatureSection";
import Location from "../components/Location";
const AboutUsSection = () => {
  return (
    <section className="bg-[#f7f5ed] w-full">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              We are exporter and manufacturer of all kind of ladies garments
              and accessories. We deals in ladies dress tops skirts trousers and
              kaftans for middle-east. bags, scarves, stoles, pareos, cushion
              cover, curtain etc.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Learn more about us <span className="ml-2">&#8594;</span>
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src={img}
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoPage = () => {
  return (
    <div className="bg-[#f7f5ed]">
      <div className="flex py-10 flex-col gap-10 items-center justify-center min-h-screen">
        <AboutUsSection />
        <FeaturesSection />
        <DetailProduction />
        <Machine />
        <Location />
      </div>
      <Footer />
    </div>
  );
};

export default InfoPage;
