import React from "react";
import harry from "../assets/images/harry5.png";
import computer from "../assets/images/computer3.png";
import arrow from "../assets/images/arrow.png";
import Wing from "./Wing";

const HeroImage = () => {
  return (
    <div className="relative ">
      <img src={harry} className="h-[400px] max-w-full updown" alt="" />
      <div className="absolute top-0 -left-10 ">
        <Wing />
      </div>
      <div className="absolute bottom-[40%] right-[30%] ">
        <img
          src={computer}
          className=" h-[90px] rotate-6 animate-pulse updown"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroImage;
