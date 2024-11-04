import React from "react";

const Essentials = () => {
  return (
    <div className="container mx-auto px-4 mb-10 lg:h-1/2 o">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 lg:w-2/4">
          <img
            src="images/virus.jpeg"
            alt="virus"
            className="shadow-2xl w-full h-auto object-cover rounded-md"
          />
        </div>

        <div className="bg-white shadow-2xl p-8 border-b-4 border-blue-500 max-w-md -translate-x-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Things That Comes With Menopause.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-6">
            The eight essential elements women need to know to support good
            heart and brain health.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Essentials;
