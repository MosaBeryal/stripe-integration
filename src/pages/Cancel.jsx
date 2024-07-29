// src/pages/Cancel.js

import React from "react";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-red-500 mb-4">
        Checkout Canceled
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        We're sorry to see you cancel your checkout process. If you have any
        questions or need assistance, please contact our support team.
      </p>
      <div className="flex space-x-4">
        <Link
          to="/"
          className="px-4 py-2 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
        >
          Return to Home
        </Link>
        <Link
          to="/support"
          className="px-4 py-2 text-white bg-green-500 rounded-md shadow-md hover:bg-green-600 transition duration-300"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
};

export default Cancel;
