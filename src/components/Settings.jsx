import React, { useState } from 'react';

function Settings({ darkMode, toggleDarkMode }) {
  // Local state for settings (as required in the assignment)
  const [localSettings, setLocalSettings] = useState({
    darkMode: darkMode
  });

  const handleDarkModeToggle = () => {
    // Update local settings
    setLocalSettings({
      ...localSettings,
      darkMode: !localSettings.darkMode
    });
    
    // Call the parent function to update the main state
    toggleDarkMode();
  };

  return (
    <div className={`card ${darkMode ? 'bg-dark text-light' : 'bg-light'}`}>
      <div className="card-body">
        <h2 className="card-title">Settings</h2>
        
        <div className="form-check form-switch mt-4">
          <input 
            className="form-check-input" 
            type="checkbox" 
            id="darkModeToggle" 
            checked={localSettings.darkMode} 
            onChange={handleDarkModeToggle} 
          />
          <label className="form-check-label" htmlFor="darkModeToggle">
            Dark Mode
          </label>
        </div>
      </div>
    </div>
  );
}

export default Settings;