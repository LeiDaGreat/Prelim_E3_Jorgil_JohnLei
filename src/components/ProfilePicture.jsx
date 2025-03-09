import React from 'react';
import profilePic from '../components/pic.png'; 

function ProfilePicture({ pictureUrl }) {
  return (
    <div className="profile-picture">
      <img 
        src={pictureUrl || profilePic} 
        alt="Profile" 
        className="img-fluid rounded-circle" 
        style={{ width: '150px', height: '150px' }} 
      />
    </div>
  );
}

export default ProfilePicture;