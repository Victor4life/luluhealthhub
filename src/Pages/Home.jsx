import React from "react";
import Hero from "../Components/Hero";
import BlogPage from "../Components/BlogPage";

const Home = () => {
  return (
    <div>
      <Hero />

      <div className="max-w-7xl mx-auto">
        <BlogPage />
      </div>
    </div>
  );
};

export default Home;
