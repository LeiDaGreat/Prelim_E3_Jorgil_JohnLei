import React from 'react';
import UserInfo from '../components/UserInfo';
import ProfilePicture from '../components/ProfilePicture';

function Profile({ user, updateName, darkMode }) {
  const handleNameChange = (e) => {
    updateName(e.target.value);
  };

  return (
    <div className={`card ${darkMode ? 'bg-dark text-light' : 'bg-light'}`}>
      <div className="card-body">
        <h2 className="card-title text-center">User Profile</h2>
        
        <div className="row align-items-center mb-4">
          <div className="col-md-4 text-center">
            <ProfilePicture />
          </div>
          <div className="col-md-8">
            <UserInfo name={user.name} />
            
            <div className="mb-3 mt-4">
              <label htmlFor="nameInput" className="form-label">Name:</label>
              <input 
                type="text" 
                id="nameInput" 
                className="form-control" 
                value={user.name} 
                onChange={handleNameChange} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;