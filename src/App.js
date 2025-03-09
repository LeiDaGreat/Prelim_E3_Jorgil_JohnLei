import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Settings from './components/Settings';
import './App.css';

function App() {
 
  const [user, setUser] = useState({
    name: "John Lei Jorgil",
    settings: {
      darkMode: false
    }
  });


  const updateName = (newName) => {
    setUser({
      ...user,
      name: newName
    });
  };

 
  const toggleDarkMode = () => {
    setUser({
      ...user,
      settings: {
        ...user.settings,
        darkMode: !user.settings.darkMode
      }
    });
  };

  return (
    <Router>
      <div className={`App ${user.settings.darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">React Profile App</Link>
            <div className="navbar-nav">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/profile">Profile</Link>
              <Link className="nav-link" to="/settings">Settings</Link>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/profile" 
              element={
                <Profile 
                  user={user} 
                  updateName={updateName} 
                  darkMode={user.settings.darkMode} 
                />
              } 
            />
            <Route 
              path="/settings" 
              element={
                <Settings 
                  darkMode={user.settings.darkMode} 
                  toggleDarkMode={toggleDarkMode} 
                />
              } 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;