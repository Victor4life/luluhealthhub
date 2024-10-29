import React from "react";
import Subscribe from "../Components/Subscribe";
const Services = () => {
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold">
          What We Do
        </h1>
      </div>
      <div className="-translate-y-1/2">
        <Subscribe />
      </div>
    </div>
  );
};

export default Services;
