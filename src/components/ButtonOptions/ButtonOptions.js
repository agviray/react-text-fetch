import React from 'react';
import './buttonOptions.css';

const ButtonOptions = ({ buttons, activePair }) => {
  const handleClick = (arg, callback) => {
    callback(arg);
  };

  return (
    <div className="buttonOptions">
      {buttons.map(({ type, name, buttonAction }) => (
        <span
          key={type}
          className={`${type}`}
          onClick={() => handleClick(activePair, buttonAction)}
        >
          {name}
        </span>
      ))}
    </div>
  );
};

export default ButtonOptions;
