import React, { useState, useEffect, useRef, useCallback } from "react";

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
  const [visibleCards, setVisibleCards] = useState(1);
  const sliderRef = useRef(null);
  const observerRef = useRef(null);

  const updateVisibleCards = useCallback(() => {
    if (window.innerWidth >= 768) {
      setVisibleCards(3);
    } else {
      setVisibleCards(1);
    }
  }, []);

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, [updateVisibleCards]);

  useEffect(() => {
    if (sliderRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCurrentIndex(Number(entry.target.dataset.index));
            }
          });
        },
        { threshold: 0.5 }
      );

      Array.from(sliderRef.current.children).forEach((child) => {
        observerRef.current.observe(child);
      });
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollToIndex = (index) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * (sliderRef.current.offsetWidth / visibleCards),
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + visibleCards) % cards.length;
    scrollToIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex =
      (currentIndex - visibleCards + cards.length) % cards.length;
    scrollToIndex(newIndex);
  };

  return (
    <>
      <div className="container mx-auto px-4 relative py-12">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('images/doctor_touch.jpg')",
            filter: "brightness(.5)",
          }}
        ></div>
        <div className="relative z-10">
          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              className="flex snap-x snap-mandatory overflow-x-hidden scrollbar-hide"
              style={{
                scrollSnapType: "x mandatory",
                scrollBehavior: "smooth",
              }}
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  data-index={index}
                  className={`w-full md:w-1/3 flex-shrink-0 snap-start px-4`}
                >
                  <div className="bg-gray-50 shadow-2xl p-6 border-b-4 border-blue-500 h-full rounded-md">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-gray-800">
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
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center z-20">
            <button
              onClick={prevSlide}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-full transition duration-300 focus:outline-none"
            >
              &lt;
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center z-20">
            <button
              onClick={nextSlide}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-full transition duration-300 focus:outline-none"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menopause;
