import React from "react";
import { About } from "../components/About";
import { CarouselComponent } from "../components/CarouselComponent";
import Founder from "../components/Founder";
import GallerySection from "../components/GallerySection";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="w-screen h-screen">
      {/* <CarouselComponent /> */}
      <Banner />

      <Founder />
      <About />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default HomePage;
