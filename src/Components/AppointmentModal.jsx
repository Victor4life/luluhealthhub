import React, { useState } from "react";
import { Client, Databases, Account } from "appwrite";
import PropTypes from "prop-types";

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const databases = new Databases(client);
const account = new Account(client);

const AppointmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    reason: "",
    duration: "100",
    status: "scheduled",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      reason: "",
      duration: "100",
      status: "scheduled",
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      let userId = "guest";
      try {
        // Try to get the user account
        const user = await account.get();
        userId = user.$id;
      } catch (accountError) {
        // If getting the account fails, we'll use 'guest' as the userId
        console.log("User is not authenticated, proceeding as guest");
      }

      const response = await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_COLLECTION_ID,
        "unique()",
        {
          ...formData,
          duration: parseInt(formData.duration, 10),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }
      );
      console.log("Appointment booked:", response);
      alert("Appointment booked successfully!");
      resetForm();
      onClose();
    } catch (error) {
      console.error("Error booking appointment:", error);
      setError(
        error.message || "Failed to book appointment. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Book a Session</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Reason for Appointment"
            className="w-full p-2 mb-4 border rounded"
            required
          ></textarea>
          <select
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
            required
          >
            <option value="100">100 minutes</option>
            <option value="120">120 minutes</option>
            <option value="150">150 minutes</option>
            <option value="180">180 minutes</option>
            <option value="200">200 minutes</option>
          </select>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 mr-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              disabled={isLoading}
            >
              {isLoading ? "Booking..." : "Book Appointment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

AppointmentModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AppointmentModal;
