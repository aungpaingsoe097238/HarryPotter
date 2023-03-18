import React from "react";
import harry from "../assets/images/harry4.png";
import Wing from "./Wing";

const Hero = () => {
  return (
    <div className=" h-screen flex justify-center items-center relative">
      <div>
        <img src={harry} className=" h-[400px] w-full " alt="" />
      </div>
      <div className=" fly-wing ">
        <Wing />
      </div>
    </div>
  );
};

export default Hero;
