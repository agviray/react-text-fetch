import React from 'react';
import './template.css';

const Template = ({
  onActiveTemplateChange,
  templateText,
  selectedPair,
  isEditing,
}) => {
  const handleChange = (text) => {
    // - Set word limit to maximum of 30.
    if (text.split(' ').length > 30) {
      return;
    }
    onActiveTemplateChange(text);
  };

  const renderEditableTemplate = () => {
    return (
      <>
        <textarea
          value={templateText}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={(e) => e.target.select()}
        />
      </>
    );
  };

  const renderReadOnlyTemplate = (editingStatus) => {
    return editingStatus === true ? (
      renderEditableTemplate()
    ) : (
      <div>{templateText}</div>
    );
  };

  return (
    <div className="templateContainer">
      <h3>Template</h3>
      {Object.keys(selectedPair).length === 0 ? (
        <>{renderEditableTemplate()}</>
      ) : (
        <>{renderReadOnlyTemplate(isEditing)}</>
      )}
    </div>
  );
};

export default Template;
