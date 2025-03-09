import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    <div className="text-center">
      <h1>Welcome to my User Profile</h1>
      <p className="lead">This application demonstrates React components.</p>
      
      <div className="d-flex justify-content-center mt-4">
        <div className="card text-center" style={{ width: '18rem', cursor: 'pointer' }} onClick={goToProfile}>
          <div className="card-body">
            <div className="mb-3">
              <i className="bi bi-person-circle" style={{ fontSize: '4rem', color: '#0d6efd' }}></i>
            </div>
            <h5 className="card-title">John Lei Jorgil</h5>
            <p className="card-text">20 years old, San Pedro Laguna.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;