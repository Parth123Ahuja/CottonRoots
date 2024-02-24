import React from "react";
import Footer from "../components/Footer";
import GallerySection from "../components/GallerySection";

import dress1 from "../assets/Dress/Picture1.jpg";
import dress2 from "../assets/Dress/Picture2.jpg";
import dress3 from "../assets/Dress/Picture3.jpg";
import dress4 from "../assets/Dress/Picture4.jpg";
import dress5 from "../assets/Dress/Picture5.jpg";
import dress6 from "../assets/Dress/Picture6.jpg";
import dress7 from "../assets/Dress/Picture7.jpg";
import dress8 from "../assets/Dress/Picture8.jpg";
import dress9 from "../assets/Dress/Picture9.jpg";
import dress10 from "../assets/Dress/Picture10.jpg";
import dress11 from "../assets/Dress/Picture11.jpg";
import dress12 from "../assets/Dress/Picture12.jpg";
import dress13 from "../assets/Dress/Picture13.jpg";
import dress14 from "../assets/Dress/Picture14.jpg";
import dress15 from "../assets/Dress/Picture15.jpg";
import dress16 from "../assets/Dress/Picture16.jpg";
import dress17 from "../assets/Dress/Picture17.jpg";
import dress18 from "../assets/Dress/Picture18.jpg";
import dress19 from "../assets/Dress/Picture19.jpg";
import dress20 from "../assets/Dress/Picture20.jpg";
import dress21 from "../assets/Dress/Picture21.jpg";
import dress22 from "../assets/Dress/Picture22.jpg";
import dress23 from "../assets/Dress/Picture23.jpg";
import dress24 from "../assets/Dress/Picture24.jpg";
import dress25 from "../assets/Dress/Picture25.jpg";
import dress26 from "../assets/Dress/Picture26.jpg";
import dress27 from "../assets/Dress/Picture27.jpg";
import dress28 from "../assets/Dress/Picture28.jpg";
import dress29 from "../assets/Dress/Picture29.jpg";
import dress30 from "../assets/Dress/Picture30.jpg";

const image = [
  {
    img: dress1,
  },
  {
    img: dress2,
  },

  {
    img: dress6,
  },
  {
    img: dress4,
  },
  {
    img: dress8,
  },
  {
    img: dress9,
  },
  {
    img: dress10,
  },
  {
    img: dress11,
  },
  {
    img: dress12,
  },
  {
    img: dress14,
  },
  {
    img: dress15,
  },
  {
    img: dress16,
  },
];

const access = [
  {
    img: dress17,
  },
  {
    img: dress18,
  },
  {
    img: dress19,
  },
  {
    img: dress20,
  },

  {
    img: dress22,
  },

  {
    img: dress24,
  },
  {
    img: dress25,
  },
  {
    img: dress26,
  },
  {
    img: dress27,
  },
  {
    img: dress28,
  },
  {
    img: dress29,
  },
  {
    img: dress30,
  },
];

const tops = [
  {
    img: dress3,
  },
  {
    img: dress5,
  },
  {
    img: dress7,
  },
  {
    img: dress13,
  },
];
const DressPage = () => {
  return (
    <div className="bg-[#f7f5ed]">
      <div className="py-8 px-4  w-full h-full ">
        <GallerySection image={image} title={"Dresses"} />
        <div className="m-10"></div>
        <GallerySection image={access} title={"Accessories"} />
        <div className="m-10"></div>
        <GallerySection image={tops} title={"Tops"} />
      </div>
    </div>
  );
};

export default DressPage;
