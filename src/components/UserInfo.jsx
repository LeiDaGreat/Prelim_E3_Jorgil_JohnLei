import React from 'react';

function UserInfo({ name }) {
  return (
    <div className="user-info">
      <h3>User Information</h3>
      <p className="lead">Name: <strong>{name}</strong></p>
    </div>
  );
}

export default UserInfo;