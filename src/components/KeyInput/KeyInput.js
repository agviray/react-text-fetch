import React, { useState, useEffect } from 'react';
import './keyInput.css';

const KeyInput = ({ onActiveKeyChange, werePairsUpdated }) => {
  const [keyText, setKeyText] = useState('');

  // - Clear text from input.
  useEffect(() => {
    if (werePairsUpdated === true) {
      setKeyText('');
    }
  }, [werePairsUpdated]);

  const handleInputChange = (text) => {
    // - Set max key characters to 4.
    if (text.length > 4) {
      return;
    }
    setKeyText(text);
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
