import React, { useState, useEffect } from 'react';
import './keyInput.css';

const KeyInput = ({ onActiveKeyChange, werePairsUpdated }) => {
  const [keyText, setKeyText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // - Clear text from input.
  useEffect(() => {
    if (werePairsUpdated === true) {
      setKeyText('');
      setErrorMessage('');
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

  const handleInputBlur = (text) => {
    if (text.length < 3) {
      setErrorMessage('Key must be 3 to 4 characters.');
    }
  };

  const handleInputFocus = (e) => {
    e.target.select();
    return errorMessage === '' ? null : setErrorMessage('');
  };

  return (
    <div className="keyInputContainer">
      <h3>Key</h3>
      <input
        type="text"
        value={keyText}
        onFocus={(e) => handleInputFocus(e)}
        onBlur={(e) => handleInputBlur(e.target.value)}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      {errorMessage === '' ? null : <p>{errorMessage}</p>}
    </div>
  );
};

export default KeyInput;
