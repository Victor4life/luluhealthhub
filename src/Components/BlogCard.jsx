import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const BlogCard = ({ blogs }) => {
  if (!blogs || blogs.length === 0) {
    return <p>No blogs available.</p>;
  }

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {blogs.map((blog) => {
        if (!blog || !blog.sys || !blog.sys.id || !blog.fields) {
          return null;
        }

        const { id } = blog.sys;
        const { title, author, date, thumbnail, description } = blog.fields;

        return (
          <Link
            key={id}
            to={`/blog/${id}`}
            className="p-5 shadow-lg rounded cursor-pointer"
          >
            <div>
              {thumbnail && thumbnail.fields && thumbnail.fields.file && (
                <img
                  src={thumbnail.fields.file.url}
                  alt={title || "Blog post image"}
                  className="w-full h-[200px]"
                />
              )}
            </div>
            <h2 className="mt-4 mb-2 font-bold hover:text-green-500 cursor-pointer">
              {title || "Untitled"}
            </h2>
            <h5 className="mt-4 mb-2 hover:text-green-500 cursor-pointer">
              {description || "Untitled"}
            </h5>
            <p className="mb-2 text-gray-500">
              <FaUser className="inline-flex items-center mr-2" />
              {typeof author === "string" ? author : "Unknown Author"}
            </p>
            <p className="text-sm text-gray-600">
              Published on: {date ? new Date(date).toLocaleDateString() : "N/A"}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogCard;
