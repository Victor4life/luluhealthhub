import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const pageSize = 6;

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const query = {
          content_type: "blogPost",
          limit: pageSize,
          skip: (currentPage - 1) * pageSize,
          order: "-sys.createdAt",
        };

        if (selectedCategory) {
          query["fields.category"] = selectedCategory;
        }

        const response = await client.getEntries(query);
        setBlogs(response.items);
        setTotalBlogs(response.total);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("Failed to fetch blogs. Please try again later.");
        setBlogs([]);
        setTotalBlogs(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, [currentPage, selectedCategory]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <CategorySelection
          onSelectCategory={handleCategoryChange}
          selectedCategory={selectedCategory}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          {isLoading ? (
            <p className="text-center">Loading blogs...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : blogs.length > 0 ? (
            <>
              <BlogCard blogs={blogs} />
              <Pagination
                currentPage={currentPage}
                totalItems={totalBlogs}
                pageSize={pageSize}
                onPageChange={handlePageChange}
              />
            </>
          ) : (
            <p className="text-center">No blogs found.</p>
          )}
        </div>
        <div className="lg:w-1/4">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
