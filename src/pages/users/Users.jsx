import React, { useState } from "react";
import { useLoaderData } from "react-router";
import User from "../../components/user/User";

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);
  return (
    <div className="bg-addCoffee">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, i) => (
              <User
                key={user._id}
                user={user}
                i={i}
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
