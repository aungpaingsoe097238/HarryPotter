import React from "react";
import Html from "../assets/images/html.png"
import "../assets/wing.css";
import { AiFillHtml5 } from "react-icons/ai";

const Wing = () => {
  return (
    <div>
      <div className=" relative ">
        <div className=" w-[100px] h-[2px] bg-gold rounded-full shadow-lg fly"></div>
        <div className=" w-[80px] h-[1px] mx-auto bg-gold rounded-full shadow-lg fly"></div>
        <div className=" w-[60px] h-[1px] mx-auto bg-gold rounded-full shadow-lg fly"></div>
        <div className=" w-[30px] h-[30px] rounded-full shadow-lg absolute top-[-6px] left-[35%] ">
          <img src={ Html } alt="" />
        </div>
      </div>
    </div>
  );
};

export default Wing;
