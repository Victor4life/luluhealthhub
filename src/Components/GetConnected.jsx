import React from "react";

const GetConnected = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-r from-pink-100 to-purple-100">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0 bg-pink-500 md:w-48 flex items-center justify-center">
            <svg
              className="h-24 w-24 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Get Connected
            </div>
            <p className="mt-2 text-gray-600 leading-relaxed">
              <span className="text-3xl font-bold text-pink-500">
                Women motivate each other. Educate each other. Support each
                other. Inspire each other. Let's Go Red together to be seen, to
                be counted, to be heard, to make an impact.
              </span>
            </p>
            <div className="mt-6">
              <p className="text-gray-700 text-xl mb-4">
                Want to get involved and make a difference?
              </p>
              <button className="bg-pink-500 text-white font-bold py-3 px-6 rounded-full hover:bg-pink-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
                Join Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetConnected;
