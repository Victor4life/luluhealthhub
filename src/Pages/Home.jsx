import React from "react";
import { useLocation } from "react-router-dom";
import Hero from "../Components/Hero";
import BlogPage from "../Components/BlogPage";

const Home = () => {
  const location = useLocation();

  return (
    <div>
      <Hero key={location.pathname} />

      <div className="max-w-7xl mx-auto">
        <BlogPage />
      </div>
    </div>
  );
};

export default Home;
