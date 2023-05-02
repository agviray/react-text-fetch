import React, { useState, useEffect } from 'react';
import './template.css';

const Template = ({ onActiveTemplateChange, werePairsUpdated }) => {
  const [templateText, setTemplateText] = useState('');

  // - Clear text from textarea.
  useEffect(() => {
    if (werePairsUpdated === true) {
      setTemplateText('');
    }
  }, [werePairsUpdated]);

  const handleChange = (text) => {
    // - Set word limit to maximum of 30.
    if (text.split(' ').length > 30) {
      return;
    }
    setTemplateText(text);
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
