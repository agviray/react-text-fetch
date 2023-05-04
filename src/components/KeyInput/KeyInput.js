import React from 'react';
import './keyInput.css';

const KeyInput = ({ onActiveKeyChange, keyText }) => {
  const handleInputChange = (text) => {
    // - Set max key characters to 4.
    if (text.length > 4) {
      return;
    }
    onActiveKeyChange(text);
  };

  return (
    <div className="keyInputContainer">
      <h3>Key</h3>
      <input
        type="text"
        value={keyText}
        onFocus={(e) => e.target.select()}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  );
};

export default KeyInput;
