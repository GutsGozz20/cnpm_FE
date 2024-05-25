// frontend/src/components/UserList.js
import React from 'react';
import User from './User';

const UserList = ({ users, editUser, deleteUser }) => {
  return (
    <div className="mt-4">
      {users.map((user) => (
        <User key={user._id} user={user} editUser={editUser} deleteUser={deleteUser} />
      ))}
    </div>
  );
};

export default UserList;
