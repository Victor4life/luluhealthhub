import React from "react";

const CategorySelection = ({ onSelectCategory, activeCategory }) => {
  const categories = [
    "Reproductive Health",
    "Mental Health",
    "Hormonal Health",
    "Sexual Health",
    "Lifestyle & Wellness",
    "Nutritional Health",
  ];

  return (
    <div className="px-4 mb-8 py-1 text-gray-900">
      <div className="overflow-x-auto flex items-center space-x-2 pb-2">
        <button
          onClick={() => onSelectCategory(null)}
          className={`whitespace-nowrap px-4 py-2 rounded-full ${
            activeCategory ? "bg-gray-200" : "bg-blue-500 text-white"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            onClick={() => onSelectCategory(category)}
            className={`whitespace-nowrap px-4 py-2 rounded-full ${
              activeCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelection;
