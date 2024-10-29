import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-full h-full object-cover"
      >
        <source src="videos/hero-display.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay to ensure text is readable */}
      <div className="absolute z-10 w-full h-full bg-black opacity-80"></div>
      {/* Content */}
      <div className="relative z-20 text-center text-white px-4">
        <div>
          <h1 className="text-5xl md:text-7xl sm:text-3xl leading-snug font-bold mb-5">
            LULU'S HEALTH HUB
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-200 max-w-xs sm:max-w-sm md:max-w-md mx-auto mb-3">
            Join our health-focused community today
          </p>
          <div>
            <Link
              to="/about"
              className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white hover:text-green-700 transition duration-150 ease-in-out"
            >
              Learn More <FaArrowRight className="ml-1 sm:ml-2" />
            </Link>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Hero;
