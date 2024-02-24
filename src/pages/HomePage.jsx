import React from "react";
import { About } from "../components/About";
import { Footer } from "../components/Footer";
import Founder from "../components/Founder";
import GallerySection from "../components/GallerySection";
import Banner from "../components/Banner";

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

const galleryTitle = "Our Gallery";
const HomePage = () => {
  return (
    <div className="w-screen h-screen">
      <Banner />
      <Founder />
      <About />
      <GallerySection image={image} title={galleryTitle} />
      <Footer />
    </div>
  );
};

export default HomePage;
