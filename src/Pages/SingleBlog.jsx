import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaUser, FaClock } from "react-icons/fa6";
import SideBar from "../Components/SideBar";
import ShareSection from "../Components/ShareSection";
import CommentSection from "../Components/CommentSection";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

const SingleBlog = () => {
  const blogPost = useLoaderData();

  console.log("Blog post data:", blogPost);

  if (!blogPost) {
    return <div className="text-center py-10">Blog post not found</div>;
  }

  const { title, author, date, thumbnail, content } = blogPost.fields;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Function to safely get author name
  const getAuthorName = (author) => {
    if (typeof author === "string") return author;
    if (author && author.fields && author.fields.name)
      return author.fields.name;
    return "Unknown Author";
  };

  //Rendering the inlines and embed from the contentful
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="mb-4">{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="text-4xl font-bold mb-4">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-3xl font-bold mb-3">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="text-2xl font-bold mb-2">{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="text-xl font-bold mb-2">{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5 className="text-lg font-bold mb-2">{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h6 className="text-base font-bold mb-2">{children}</h6>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc pl-5 mb-4">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="list-decimal pl-5 mb-4">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="mb-1">{children}</li>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4">
          {children}
        </blockquote>
      ),
      [BLOCKS.HR]: () => <hr className="my-8" />,
      [BLOCKS.TABLE]: (node, children) => (
        <table className="w-full border-collapse border border-gray-300 mb-4">
          <tbody>{children}</tbody>
        </table>
      ),
      [BLOCKS.TABLE_ROW]: (node, children) => <tr>{children}</tr>,
      [BLOCKS.TABLE_CELL]: (node, children) => (
        <td className="border border-gray-300 p-2">{children}</td>
      ),
      [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
        <th className="border border-gray-300 p-2 font-bold bg-gray-100">
          {children}
        </th>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          href={node.data.uri}
          className="text-black hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
      [INLINES.ENTRY_HYPERLINK]: (node, children) => (
        <span className="text-green-600 cursor-pointer">{children}</span>
      ),
      [INLINES.ASSET_HYPERLINK]: (node, children) => (
        <span className="text-purple-600 cursor-pointer">{children}</span>
      ),
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        // You might want to customize this based on your entry structure
        return (
          <div className="bg-gray-100 p-4 rounded mb-4">
            Embedded Entry: {node.data.target.fields.title}
          </div>
        );
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { url, fileName } = node.data.target.fields.file;
        return <img src={url} alt={fileName} className="w-1/2 rounded my-4" />;
      },
    },
  };

  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");

    try {
      // Here you would typically send this data to your backend
      // For demonstration, we'll just log it
      console.log(
        `Sending to emekav233@gmail.com: Name: ${name}, Email: ${email}`
      );

      // const response = await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name, email, targetEmail: 'emekav233@gmail.com' })
      // });

      // if (response.ok) {
      //   setFormStatus('Thanks for subscribing!');
      // } else {
      //   setFormStatus('An error occurred. Please try again.');
      // }

      // Simulate a successful submission
      setFormStatus("Thanks for subscribing!");
    } catch (error) {
      console.error("Error:", error);
      setFormStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <main className="max-w-7xl mx-10 my-12 flex flex-col md:flex-row gap-12 py-20">
        <article className="lg:w-3/4 mx-auto">
          {thumbnail && thumbnail.fields && thumbnail.fields.file && (
            <img
              src={thumbnail.fields.file.url}
              alt={title}
              className="w-full h-[400px] object-cover mx-auto rounded"
            />
          )}
          <h3 className="text-2xl lg:text-4xl leading-snug font-bold mb-9 mt-9">
            {title}
          </h3>
          <div className="mt-8 mb-4 flex flex-wrap gap-4 text-gray-500">
            <p className="flex items-center">
              <FaUser className="mr-2" />
              {getAuthorName(author)}
            </p>
            <p className="flex items-center">
              <FaClock className="mr-2" />
              {formatDate(date)}
            </p>
          </div>
          <hr />
          <div className="text-base text-gray-700 mt-6">
            {typeof content === "string" ? (
              <p>{content}</p>
            ) : (
              documentToReactComponents(content, options)
            )}
          </div>
          {/*Share Section*/}
          <div className="mt-8 border-t pt-8">
            <h2 className="text-2xl font-bold mb-4">Share this post</h2>
            <ShareSection url={window.location.href} title={title} />
          </div>
          {/*Comment Section*/}
          <div className="mt-8 border-t pt-8">
            <CommentSection />
          </div>
        </article>

        <aside className="lg:w-1/4">
          <SideBar />
          <form
            onSubmit={handleSubmit}
            className="bg-blue-500 text-white p-6 rounded-lg shadow-md mt-8"
          >
            <h3 className="text-xl font-bold">Join the Mailing List.</h3>
            <p className="mb-4">
              Subscribbe to get our latest articles sent directly to your mail.
            </p>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name..."
                required
                className="w-full px-3 py-2 text-gray-700 bg-white border-b border-gray-300 focus:border-blue-600 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                required
                placeholder="Email..."
                className="w-full px-3 py-2 text-gray-700 bg-white border-b-3 border-gray-300 focus:border-blue-600 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-blue-500 font-bold py-2 px-4 rounded-md hover:bg-blue-100 transition duration-300"
            >
              Subscribe
            </button>
            {formStatus && <p className="mt-4 text-center">{formStatus}</p>}
          </form>
        </aside>
      </main>
    </div>
  );
};

export default SingleBlog;
