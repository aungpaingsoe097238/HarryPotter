import React from "react";
import "../assets/hero.css";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import HeroTitle from "./HeroTitle";
import world from "../assets/images/world.png";

const Hero = () => {
  return (
    <div className="h-screen relative flex hero overflow-hidden bg-back ">
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
