import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { createClient } from "contentful";

const SideBar = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [popularBlogs, setPopularBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const client = createClient({
      space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
      accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    });

    const fetchBlogs = async () => {
      try {
        const response = await client.getEntries({
          content_type: "blogPost",
          order: "-sys.createdAt",
          limit: 10,
        });

        const blogs = response.items.map((item) => ({
          id: item.sys.id,
          title: item.fields.title,
          slug: item.fields.slug,
        }));

        setLatestBlogs(blogs.slice(0, 5));
        setPopularBlogs(blogs.slice(5, 10));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load blogs. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (isLoading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  const renderBlogList = (blogs, title) => (
    <div>
      <h3 className="text-2xl font-bold text-gray-700 px-4 mb-6 border-b-2 border-gray-300 pb-2">
        {title}
      </h3>
      <div>
        {blogs.map((blog) => (
          <div key={blog.id} className="my-5 border-b-2 border-spacing-2 px-4">
            <h4 className="font-medium mb-2">{blog.title}</h4>
            <Link
              to={`/blog/${blog.id}`}
              className="text-base pb-2 hover:text-green-500 inline-flex items-center py-1"
              onClick={(e) => {
                console.log(`Navigating to: /blog/${blog.id}`);
              }}
            >
              Read More <FaArrowRight className="mt-1 ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      {renderBlogList(latestBlogs, "Latest Blogs")}
      {renderBlogList(popularBlogs, "Popular Blogs")}
    </div>
  );
};

export default SideBar;
