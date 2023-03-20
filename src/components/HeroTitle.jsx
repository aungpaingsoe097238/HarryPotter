import React from "react";

const HeroTitle = () => {
  return (
    <div className="flex items-center lg:mt-[20%] ">
      <div className=" flex flex-col mx-auto text-end">
        <span className=" font-bold text-xl text-primary">Hi my name is</span>
        <span className=" text-5xl my-5 font-harry text-black font-bold">
          Aung Paing Soe
        </span>
        <span className=" text-2xl text-primary font-bold">
          A Full-Stack Developer
        </span>
      </div>
    </div>
  );
};

export default HeroTitle;
