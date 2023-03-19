import React from "react";
import harry from "../assets/images/harry4.png";
import Wing from "./Wing";

const Hero = () => {
  return (
    <div className=" h-screen flex justify-center items-center">
      <div className=" relative ">
        <img src={harry} className=" h-[400px] w-full updown" alt="" />
        <div className="absolute top-2 -left-10 ">
          <Wing />
        </div>
      </div>
    </div>
  );
};

export default Hero;
