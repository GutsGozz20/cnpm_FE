// frontend/src/components/User.js
import React from 'react';

const User = ({ user, editUser, deleteUser }) => {
  return (
    <div className="p-4 mb-4 bg-white shadow rounded">
      <h3 className="text-lg font-bold">{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => editUser(user)} className="mr-2 px-4 py-2 bg-yellow-500 text-white rounded">
        Edit
      </button>
      <button onClick={() => deleteUser(user._id)} className="px-4 py-2 bg-red-500 text-white rounded">
        Delete
      </button>
    </div>
  );
};

export default User;
