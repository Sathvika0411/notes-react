import React from "react";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Key Notes</h1>
      <button 
        onClick={handleToggleDarkMode}
        className="save"
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
