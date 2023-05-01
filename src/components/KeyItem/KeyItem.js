import React from 'react';
import './keyItem.css';
const KeyItem = ({ children }) => {
  return (
    <li className="keyItemContainer">
      <span>{children}</span>
    </li>
  );
};

export default KeyItem;
