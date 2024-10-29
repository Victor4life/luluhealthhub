import React, { useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const Donate = ({ onClose }) => {
  const [amount, setAmount] = useState("");

  const config = {
    public_key: "FLWPUBK_TEST-14bc596bfc3069741b65a05ec921cbeb-X",
    tx_ref: Date.now(),
    amount: parseFloat(amount),
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@example.com",
      phone_number: "070********",
      name: "John Doe",
    },
    customizations: {
      title: "Donation to Our Cause",
      description: "Thank you for your support",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount) {
      handleFlutterPayment({
        callback: (response) => {
          console.log(response);
          if (response.status === "successful") {
            console.log("Donation successful");
          } else {
            console.log("Donation failed");
          }
          closePaymentModal();
          onClose();
        },
        onClose: () => {
          console.log("Payment modal closed");
        },
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Make a Donation</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Donation Amount (Naira)
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter amount"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              Donate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Donate;
