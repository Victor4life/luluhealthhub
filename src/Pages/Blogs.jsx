import React from "react";
import BlogPage from "../Components/BlogPage";

const Blogs = () => {
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Blog Page
        </h1>
      </div>

      {/**all blogs */}
      <div className="max-w-7xl mx-auto">
        <BlogPage />
      </div>
    </div>
  );
};

export default Blogs;
