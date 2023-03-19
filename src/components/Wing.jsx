import React from "react";
import Html from "../assets/images/html.png";
import "../assets/wing.css";
import { AiFillHtml5 } from "react-icons/ai";
import WingS from "../assets/images/wing2.png";
import Ball from "../assets/images/ball.png";

const Wing = () => {
  return (
    <div className=" wing">
      <div className=" relative">
        <img src={WingS} className="fly h-[80px]" alt="" />
        <div className=" flex justify-center items-center absolute bottom-[15%] left-[13%] rounded-full ">
          <img src={ Ball } className=" h-[60px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Wing;
