import React, { useState } from "react";
import { useLoaderData } from "react-router";
import User from "../../components/user/User";

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);
  if (users.length < 1) {
    return (
      <p className="text-xl md:text-3xl rancho-font text-center">
        No User Found . . .
      </p>
    );
  }
  return (
    <div className="bg-dashboard">
      <div className="overflow-x-auto max-w-4xl mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>User Info</th>
              <th>Phone</th>
              <th>Creation Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((userData, i) => (
              <User
                key={userData._id}
                userData={userData}
                i={i}
                users={users}
                setUsers={setUsers}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
