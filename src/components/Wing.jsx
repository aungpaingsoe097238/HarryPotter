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
      </div>
    </div>
  );
};

export default Wing;
