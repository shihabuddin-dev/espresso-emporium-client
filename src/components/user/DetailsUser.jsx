import React from "react";
import { FaEdit } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const DetailsUser = () => {
  const user = useLoaderData();
  const {
    _id,
    name,
    email,
    address,
    phone,
    photo,
    creationTime,
    lastSignInTime,
  } = user;
  // Format time like "Thu, 15 May 2025"
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toDateString();
  };

  return (
    <div className="bg-dashboard">
      <Link
        to="/"
        className="text-[#331A15] text-2xl rancho-font hover:underline mb-4 flex justify-center text-shadow-secondary"
      >
        ← Back to home
      </Link>
      <div className="max-w-3xl mx-auto pt-10 p-6 bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0">
          <img
            src={photo}
            alt={name}
            className="w-40 h-40 object-cover rounded-full border-4 border-blue-200 shadow-md"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            User Information{" "}
            <Link
              to={`/updateUser/${_id}`}
              className="btn btn-xs bg-[#D2B48C] text-white"
            >
              <FaEdit />
            </Link>
          </h2>
          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-semibold">Name:</span> {name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {phone}
            </p>
            <p>
              <span className="font-semibold">Address:</span> {address}
            </p>
            <p>
              <span className="font-semibold">Account Created:</span>{" "}
              {formatDate(creationTime)}
            </p>
            <p>
              <span className="font-semibold">Last Sign In:</span>{" "}
              {formatDate(lastSignInTime)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsUser;
