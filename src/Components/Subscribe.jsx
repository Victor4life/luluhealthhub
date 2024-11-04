import React, { useState } from "react";
import Donate from "./Donate";

const Subscribe = () => {
  const [showDonate, setShowDonate] = useState(false);

  const handleDonateClick = () => {
    setShowDonate(true);
  };

  return (
    <div className="max-w-xl mx-auto mt-8 overflow-hidden rounded-lg shadow-xl border-4 border-gray-800">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 bg-black p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Join Us to Reach Out to More.
          </h2>
          <form className="flex flex-col gap-3">
            <button
              type="button"
              onClick={handleDonateClick}
              className="bg-white text-blue-600 px-4 py-2 text-sm sm:text-base rounded-md font-semibold hover:bg-blue-100 transition duration-300 ease-in-out"
            >
              Donate
            </button>
          </form>
        </div>
        <div
          className="w-full sm:w-1/2 bg-cover bg-center h-48 sm:h-auto bg-opacityt-800"
          style={{ backgroundImage: "url('images/subscribe.png')" }}
        ></div>
      </div>
      {showDonate && <Donate onClose={() => setShowDonate(false)} />}
    </div>
  );
};

export default Subscribe;
