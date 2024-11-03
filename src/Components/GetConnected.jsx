import React from "react";

const GetConnected = () => {
  return (
    <div className="container mx-auto px-10 py-8 bg-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div>
          <p className="text-grey-200">
            <span className="Font-bold text-3xl">W</span>omen motivate each
            other. Educate each other. Support each other. Inspire each other.
            Let’s Go Red together to be seen, to be counted, to be heard, to
            make an impact.
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-2xl">
            Want to get involved and make a difference
          </p>
          <button className="bg-blue-500 border rounded-md p-3 text-white">
            Get Connected
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetConnected;
