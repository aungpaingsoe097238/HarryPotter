import React from "react";
import harry from "../assets/images/harry4.png";
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
        <div className="relative">
          <img
            src={computer}
            className=" h-[90px] rotate-6 animate-pulse updown"
            alt=""
          />
          <div className=" absolute bottom-[-70%] left-[130%]">
            <div className=" relative w-[200px]">
              <span className=" font-pacifico text-black hover:text-primary underline cursor-pointer text-lg">
                portfolio
              </span>
              <img
                src={arrow}
                className=" absolute top-[-50%] left-[-25%] h-[15px] rotate-[-150deg] "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute top-0 left-[80%]">
        <div className=" relative w-[200px]">
          <span className=" font-pacifico text-black underline hover:text-primary cursor-pointer text-lg">
            about me
          </span>
          <img
            src={arrow}
            className=" absolute top-[100%] left-[-25%] h-[15px] rotate-[150deg] "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
