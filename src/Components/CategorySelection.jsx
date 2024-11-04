import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const CategorySelection = ({ onSelectCategory, activeCategory, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "Reproductive Health",
    "Mental Health",
    "Hormonal Health",
    "Sexual Health",
    "Lifestyle & Wellness",
  ];

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

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
        <div className="flex items-center bg-gray-200 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Search a Topic..."
            value={searchTerm}
            onChange={handleInputChange}
            className="bg-transparent outline-none"
          />
          <button
            onClick={handleSearch}
            className="ml-2 focus:outline-none"
            aria-label="Search"
          >
            <FaMagnifyingGlass />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySelection;
