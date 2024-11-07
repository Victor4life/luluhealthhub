import React from "react";
import Subscribe from "../Components/Subscribe";
import Menopause from "../Components/Menopause";
import Essentials from "../Components/Essentials";

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
      <Essentials />
      <Menopause />
    </div>
  );
};

export default Services;
