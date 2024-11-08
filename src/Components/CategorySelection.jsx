import React from "react";

const CategorySelection = ({ onSelectTag, activeTag, tags }) => {
  return (
    <div className="px-4 mb-8 py-1 text-gray-900">
      <div className="overflow-x-auto flex items-center space-x-2 pb-2">
        <button
          onClick={() => onSelectTag(null)}
          className={`whitespace-nowrap px-4 py-2 rounded-full ${
            activeTag ? "bg-gray-200" : "bg-blue-500 text-white"
          }`}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            onClick={() => onSelectTag(tag)}
            className={`whitespace-nowrap px-4 py-2 rounded-full ${
              activeTag === tag ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            key={tag}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelection;
