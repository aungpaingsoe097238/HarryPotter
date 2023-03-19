import React from "react";
import Html from "../assets/images/html.png";
import "../assets/wing.css";
import { AiFillHtml5 } from "react-icons/ai";
import WingS from "../assets/images/wing2.png";
import Ball from "../assets/images/ball.png";

const Wing = () => {
  return (
    <div>
      {/* Version One */}
      {/* <div className=" relative ">
        <div className=" w-[100px] h-[2px] bg-yellow-500 rounded-full shadow-lg fly"></div>
        <div className=" w-[70px] h-[1px] mx-auto bg-yellow-500 rounded-full shadow-lg fly"></div>
        <div className=" w-[50px] h-[1px] mx-auto bg-yellow-500 rounded-full shadow-lg fly"></div>
        <div className=" flex justify-center items-center absolute top-[-6px] left-[35%] ">
          <AiFillHtml5 className=" text-3xl text-white p-1 rounded-full bg-yellow-500"/>
        </div> 
      </div> */}
      <div className=" relative">
        <img src={WingS} className="fly h-[80px]" alt="" />
        <div className=" flex justify-center items-center absolute bottom-[10%] left-[13%] rounded-full ">
          <img src={ Ball } className=" h-[60px] " alt="" />
        </div>
      </div>
    </div>
  );
};

export default Wing;
