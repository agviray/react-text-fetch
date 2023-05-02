import React, { useState } from 'react';
import './keyInput.css';

const KeyInput = () => {
  const [key, setKey] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (text) => {
    // - Set max key characters to 4.
    if (text.length > 4) {
      return;
    }
    setKey(text);
  };

  const handleInputBlur = (text) => {
    // - Regular expression for only numbers and letters.
    const regex = /^[A-Za-z0-9]*$/;
    if (regex.test(text) === false) {
      setErrorMessage('Key must only contain numbers or letters.');
    } else if (text.length < 3) {
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
        value={key}
        onFocus={(e) => handleInputFocus(e)}
        onBlur={(e) => handleInputBlur(e.target.value)}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      {errorMessage === '' ? null : <p>{errorMessage}</p>}
    </div>
  );
};

export default KeyInput;
