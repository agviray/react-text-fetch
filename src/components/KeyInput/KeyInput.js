import React from 'react';
import './keyInput.css';

const KeyInput = ({ onActiveKeyChange, keyText, selectedPair, isEditing }) => {
  const handleInputChange = (text) => {
    // - Set max key characters to 4.
    if (text.length > 4) {
      return;
    }
    onActiveKeyChange(text);
  };

  const renderEditableInput = () => {
    return (
      <>
        <input
          type="text"
          value={keyText}
          onFocus={(e) => e.target.select()}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      </>
    );
  };

  const renderReadOnlyInput = (editingStatus) => {
    return editingStatus === true ? (
      renderEditableInput()
    ) : (
      <div>{keyText}</div>
    );
  };
  return (
    <div className="keyInputContainer">
      <h3>Key</h3>
      {Object.keys(selectedPair).length === 0 ? (
        <>{renderEditableInput()}</>
      ) : (
        <>{renderReadOnlyInput(isEditing)}</>
      )}
    </div>
  );
};

export default KeyInput;
