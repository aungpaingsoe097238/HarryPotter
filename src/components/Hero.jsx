import React from "react";
import harry from "../assets/images/harry4.png";
import Wing from "./Wing";

const Hero = () => {
  return (
    <div className="h-screen flex bg-white">
      <div className=" basis-1/3 ">
        <div className="flex flex-col text-end mt-[20%]">
          <span className=" font-bold text-xl text-primary">Hi my name is</span>
          <span className=" text-5xl my-5 font-harry text-black font-bold">
            Aung Paing Soe
          </span>
          <span className=" text-2xl text-primary font-bold">
            A Full-Stack Developer
          </span>
        </div>
      </div>
      <div className=" basis-1/3 h-screen flex justify-center items-center">
        <div className="relative ">
          <img src={harry} className="h-[400px] max-w-full updown" alt="" />
          <div className="absolute top-2 -left-10 ">
            <Wing />
          </div>
        </div>
      </div>
      <div className=" basis-1/3 h-screen flex items-end">
        <div className="flex flex-col text-start w-[80%] mb-[20%]">
          <span className=" font-bold text-primary ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laudantium, explicabo, dolores quaerat suscipit voluptas dolorum
            labore eum natus nesciunt commodi hic voluptatum. Doloribus dolore
            nemo voluptatum dicta, ea quis repellendus?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
