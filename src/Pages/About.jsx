import React from "react";
import Subscribe from "../Components/Subscribe";

const About = () => {
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold">
          About Us
        </h1>
      </div>
      <div className="-translate-y-1/2">
        <Subscribe />
      </div>
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="md:flex md:space-x-6">
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-6 text-center">
              What is this HUB all about?
            </h1>
            <p className="mb-4">
              HealthDay has been producing award-winning content since 1998,
              growing to become the world's largest syndicator of health news
              and a leading independent creator of evidence-based health
              content.
            </p>
            <p className="mb-4">
              Our editors and writers have won numerous awards in journalism,
              including the Pulitzer Award and top prizes from Associated Press
              Managing Editors. We are committed to delivering credible,
              relevant, and timely health content.
            </p>
            <p className="mb-4">
              Leading media such as WebMD, American Heart Association, and US
              News and World Report, as well as medical publishers like Elsevier
              and Wolters Kluwer, trust HealthDay content for their websites,
              newsletters, and various marketing channels.
            </p>
            <p>
              As a division of ScoutNews LLC, HealthDay operates under the
              strictest editorial standards, ensuring our content is independent
              of financial interests and based solely on respected industry
              sources and the latest scientific research.
            </p>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0">
            <div className="relative">
              <img
                src="/images/subscribe.png"
                alt="HealthDay"
                className="w-full h-auto"
              />
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <path
                  fill="#0F62FE"
                  fillOpacity="0.5"
                  d="M31.4,-54C40.3,-43.1,46.7,-33.7,52.5,-23.3C58.2,-12.9,63.2,-1.6,63.3,10.2C63.3,22,58.3,34.1,51,46.3C43.7,58.5,34.1,70.8,21.8,74.5C9.6,78.3,-5.3,73.4,-21.9,70.5C-38.6,67.5,-57.1,66.5,-63.6,56.5C-70.1,46.5,-64.8,27.5,-59.9,13.1C-55.1,-1.4,-50.8,-11.3,-49.1,-25.5C-47.4,-39.6,-48.2,-58,-40.5,-69.4C-32.7,-80.8,-16.4,-85.2,-2.6,-81.2C11.3,-77.2,22.5,-64.9,31.4,-54Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
