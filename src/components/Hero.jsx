import React from "react";
import "../assets/hero.css";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import HeroTitle from "./HeroTitle";
import cloud from "../assets/images/cloud.png";
import cloud2 from "../assets/images/cloud2.png";
import cloud3 from "../assets/images/cloud3.png";
import cloud4 from "../assets/images/cloud4.png";
import cloud5 from "../assets/images/cloud5.png";
import cloud6 from "../assets/images/cloud6.png";
import cloud7 from "../assets/images/cloud7.png";
import cloud8 from "../assets/images/cloud8.png";

const Hero = () => {
  return (
    <div className="h-screen relative flex hero ">
      <div className=" absolute bottom-[-70%] left-[22%] ">
        <div className=" w-[1000px] h-[1000px] bg-rose-500 rounded-full ">
        </div>
      </div>
      <div className=" basis-1/3 ">
        <HeroTitle />
      </div>
      <div className=" basis-1/3 h-screen flex justify-center items-center">
        <HeroImage />
      </div>
      <div className=" basis-1/3 h-screen flex items-end">
        <HeroText />
      </div>
    </div>
  );
};

export default Hero;
