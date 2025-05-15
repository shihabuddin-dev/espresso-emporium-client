import React from "react";
import { Link, useLoaderData } from "react-router";
import Button from "../ui/Button";
import Swal from "sweetalert2";

const UpdateUser = () => {
  const user = useLoaderData();
  const { _id, name, address, phone, photo } = user || {};

  const handleUpdate = (e) => {
    e.preventDefault();
    // const form = e.target;
    // const formData = new FormData(form);
    // const updateUser = Object.fromEntries(formData.entries());

    // fetch(`http://localhost:5173/users/${_id}`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(updateUser),
    // }).then((res) => res.json())
    //   .then((data) => {
    //     if (data.modifiedCount) {
    //       Swal.fire({
    //         icon: "success",
    //         title: "User Updated Successful",
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
    //     }
    //   });
  };

  return (
    <div className="bg-addCoffee">
      <Link
        to="/"
        className="text-[#331A15] text-2xl rancho-font hover:underline mb-4 flex justify-center text-shadow-secondary"
      >
        ← Back to home
      </Link>
      <form
        onSubmit={handleUpdate}
        className="max-w-md mx-auto p-6 bg-white rounded shadow"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          Update User Info
        </h2>
        <label className="block mb-2 text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          defaultValue={name}
          className="w-full border rounded px-3 py-2 mb-4 focus:outline-none"
          placeholder="Enter your Name"
        />
        <label className="block mb-2 text-sm font-medium">Address</label>
        <input
          type="text"
          name="address"
          defaultValue={address}
          className="w-full border rounded px-3 py-2 mb-4 focus:outline-none"
          placeholder="Enter your Address"
        />
        <label className="block mb-2 text-sm font-medium">Phone</label>
        <input
          type="text"
          name="phone"
          defaultValue={phone}
          className="w-full border rounded px-3 py-2 mb-4 focus:outline-none"
          placeholder="Enter your Phone"
        />
        <label className="block mb-2 text-sm font-medium">Photo URL</label>
        <input
          type="text"
          name="photo"
          defaultValue={photo}
          className="w-full border rounded px-3 py-2 mb-4 focus:outline-none"
          placeholder="Enter your Photo URL"
        />
        <Button type="submit" className="mt-6 w-full">
          Update
        </Button>
      </form>
    </div>
  );
};

export default UpdateUser;
