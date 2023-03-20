import React from "react";

import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import HeroTitle from "./HeroTitle";

const Hero = () => {
  return (
    <div className="h-screen relative flex">
      <div className=" basis-1/3 ">
        <HeroTitle/>
      </div>
      <div className=" basis-1/3 h-screen flex justify-center items-center">
        <HeroImage/>
      </div>
      <div className=" basis-1/3 h-screen flex items-end">
        <HeroText/>
      </div>
    </div>
  );
};

export default Hero;
