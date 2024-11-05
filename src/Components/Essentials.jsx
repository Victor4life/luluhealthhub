import React from "react";

const Essentials = () => {
  return (
    <div className="container mx-auto px-4 mb-10 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="bg-white shadow-2xl p-6 md:p-8 border-b-4 border-blue-500 max-w-md w-full mb-6 md:mb-0 md:translate-x-24">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Life Essentials For Women.
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-500 mb-6">
            The eight essential elements women need to know to support good
            heart and brain health.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 w-full md:w-auto">
            Learn More
          </button>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/4">
          <img
            src="images/three_cheerful_young_women_embracing.jpg"
            alt="Three cheerful young women embracing"
            className="shadow-2xl w-full h-auto object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Essentials;
