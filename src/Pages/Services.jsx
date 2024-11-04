import React from "react";
import Subscribe from "../Components/Subscribe";
import Essentials from "../Components/Essentials";
import GetConnected from "../Components/GetConnected";
import Menopause from "../Components/Menopause";

const Services = () => {
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold">
          Tips We Give
        </h1>
      </div>
      <div className="-translate-y-1/2">
        <Subscribe />
      </div>
      <div>
        <Essentials />
      </div>
      <Menopause />
      <GetConnected />
    </div>
  );
};

export default Services;
