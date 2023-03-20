import React, { useEffect } from "react";
import Html from "../assets/images/html.png";
import "../assets/wing.css";
import WingS from "../assets/images/wing2.png";
import Ball from "../assets/images/ball.png";
import { AiOutlineHtml5 } from "react-icons/ai";

const Wing = () => {
  
  return (
    <div className=" wing">
      <div className=" relative">
        <img src={WingS} className="fly h-[80px]" alt="" />
        {/* <div className=" flex justify-center items-center absolute bottom-[15%] left-[13%] rounded-full ">
          <img src={ Ball } className=" h-[60px]" alt="" /> 
        </div> */}
        <div className=" flex justify-center items-center absolute bottom-[15%] left-[40%] rounded-full ">
          <AiOutlineHtml5 className=" text-3xl text-gold" />
        </div>
      </div>
    </div>
  );
};

export default Wing;
