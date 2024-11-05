import React, { useState, useEffect } from "react";

const Menopause = () => {
  const cards = [
    {
      title: "Things That Come With Menopause",
      content:
        "Hot flashes, night sweats, and mood changes are common symptoms of menopause. Understanding these changes can help you manage them effectively.",
    },
    {
      title: "Managing Menopause Symptoms",
      content:
        "Lifestyle changes, such as regular exercise and a balanced diet, can help alleviate many menopause symptoms and improve overall health.",
    },
    {
      title: "Menopause and Heart Health",
      content:
        "Menopause can increase the risk of heart disease. Regular check-ups and a heart-healthy lifestyle are crucial during this transition.",
    },
    {
      title: "Bone Health During Menopause",
      content:
        "Decreased estrogen levels during menopause can lead to bone loss. Calcium-rich foods and weight-bearing exercises can help maintain bone strength.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 9000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 mb-10 overflow-hidden">
      <div className="relative h-[400px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
          >
            <div className="bg-white shadow-2xl p-8 border-b-4 border-blue-500 max-w-md mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {card.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-500 mb-6">
                {card.content}
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {cards.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 mx-1 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Menopause;
