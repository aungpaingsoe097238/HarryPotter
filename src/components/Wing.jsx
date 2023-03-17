import React from "react";
import WingLeft from "../assets/images/wing-left.png";
import WingRight from "../assets/images/wing-right.png";
import GoldBall from "../assets/images/gold-ball.png";
import "../assets/wing.css";
import { AiFillHtml5 } from "react-icons/ai";

const Wing = () => {
  return (
    <div>
      <div className=" relative">
        <img src={GoldBall} className=" fly" alt="" />
        <div className=" w-[100px] h-[60px] bg-white flex justify-center items-center absolute bottom-[25%] left-[30%] ">
          <AiFillHtml5 className=" absolute text-8xl w-[70px] max-h-[70px] text-orange-500 rounded-full mb-2  " />
        </div>
      </div>
    </div>
  );
};

export default Wing;
