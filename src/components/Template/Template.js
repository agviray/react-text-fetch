import React from 'react';
import './template.css';

const Template = ({ onActiveTemplateChange, templateText }) => {
  const handleChange = (text) => {
    // - Set word limit to maximum of 30.
    if (text.split(' ').length > 30) {
      return;
    }
    onActiveTemplateChange(text);
  };

  return (
    <div className="templateContainer">
      <h3>Template</h3>
      <textarea
        value={templateText}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={(e) => e.target.select()}
      />
    </div>
  );
};

export default Template;
