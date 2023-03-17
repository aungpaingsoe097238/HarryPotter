import React from "react";
import harry from "../assets/images/harry4.png";
import Wing from "./Wing";

const Hero = () => {
  return (
    <div className=" h-screen flex justify-center items-center relative">
      {/* <div className="absolute top-[20%] left-[10%]">
        <p className="font-harry text-7xl text-slate-700">Aung Paing Soe</p>
      </div>
      <div>
        <img src={harry} className=" h-[400px] w-full " alt="" />
      </div>
      <div className="absolute w-[500px] bottom-[20%] right-[10%]">
        <p className=" text-2xl mb-2  text-slate-700">I'm a Full-Stack Developer</p>
        <p className=" text-slate-600 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          culpa, facilis sunt repellendus beatae maxime ipsum saepe voluptatem
          numquam, aliquam officia eaque ducimus debitis tempora adipisci,
          perspiciatis deleniti fugiat eum.
        </p>
      </div> */}
      <Wing/>
    </div>
  );
};

export default Hero;
