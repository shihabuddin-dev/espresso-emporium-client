import React, { use } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { FirebaseAuthContext } from "../../provider/FirebaseAuthContext";

const User = ({ userData, i, users, setUsers }) => {
  const { deleteSingleUser } = use(FirebaseAuthContext);

  const { _id, name, photo, address, phone, creationTime } = userData || {};
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toDateString();
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://espresso-emporium-server-psi.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remainingUser = users.filter((user) => user._id !== id);
            setUsers(remainingUser);

            // delete user from firebase
            deleteSingleUser()
              .then(() => {
                // User deleted.
              })
              .catch((error) => {
                console.log(error);
              });

            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{address}</div>
          </div>
        </div>
      </td>
      <td>{phone}</td>
      <td>{formatDate(creationTime)}</td>
      <th className="space-x-1">
        <Link
          to={`/detailsUser/${_id}`}
          className="btn btn-xs bg-black text-white"
        >
          <FaEye />
        </Link>
        <Link
          to={`/updateUser/${_id}`}
          className="btn btn-xs bg-[#D2B48C] text-white"
        >
          <FaEdit />
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-xs bg-red-600 text-white"
        >
          <FaTrash />
        </button>
      </th>
    </tr>
  );
};

export default User;
