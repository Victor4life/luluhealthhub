import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentSection = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      setError(null);
      try {
        console.log(`Fetching comments for blogId: ${blogId}`);
        const response = await axios.get(`/api/comments?blogId=${blogId}`);
        console.log("API response:", response.data);
        if (Array.isArray(response.data)) {
          setComments(response.data);
        } else {
          console.warn("Unexpected response format:", response.data);
          setComments([]);
        }
      } catch (err) {
        console.error("Error fetching comments:", err);
        setError("Failed to load comments. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [blogId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newComment.trim() && authorName.trim() && authorEmail.trim()) {
      setIsLoading(true);
      setError(null);
      try {
        console.log("Submitting comment:", {
          blogId,
          text: newComment,
          author: authorName,
          email: authorEmail,
        });
        const response = await axios.post("/api/comments", {
          blogId,
          text: newComment,
          author: authorName,
          email: authorEmail,
        });
        console.log("API response:", response.data);
        setComments((prevComments) => [...prevComments, response.data]);
        setNewComment("");
        setAuthorName("");
        setAuthorEmail("");
      } catch (err) {
        console.error("Error posting comment:", err);
        setError("Failed to post comment. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    } else {
      setError("Please fill in all required fields.");
    }
  };

  if (isLoading && comments.length === 0) {
    return <div className="text-center py-4">Loading comments...</div>;
  }

  return (
    <div className="p-5 bg-gray-100 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full p-2 border-2 rounded-md"
              placeholder="Name*"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-2">
            <input
              type="email"
              value={authorEmail}
              onChange={(e) => setAuthorEmail(e.target.value)}
              className="w-full p-2 border-2 rounded-md"
              placeholder="Email*"
              required
            />
          </div>
        </div>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border-2 rounded-md mb-4"
          rows="3"
          placeholder="Write a comment..."
          required
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          disabled={isLoading}
        >
          {isLoading ? "Posting..." : "Post Comment"}
        </button>
      </form>

      <div>
        <h3 className="text-xl font-semibold mb-3">
          {comments.length} Comment{comments.length !== 1 ? "s" : ""}
        </h3>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="mb-4 p-3 bg-white rounded shadow">
              <p className="font-bold">{comment.author}</p>
              <p className="text-gray-600 text-sm mb-2">
                {new Date(comment.createdAt).toLocaleString()}
              </p>
              <p>{comment.text}</p>
            </div>
          ))
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
