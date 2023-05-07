import React, { useState } from 'react';
import './accordion.css';

const Accordion = ({ accordionContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = (isOpenStatus) => {
    return setIsOpen(!isOpenStatus);
  };

  return (
    <div className={`accordionContainer ${isOpen ? 'isOpen' : ''}`}>
      <div className="headingContainer" onClick={() => toggleIsOpen(isOpen)}>
        <h3>{accordionContent.heading}</h3>
        {isOpen ? <span>&#8722;</span> : <span>&#43;</span>}
      </div>
      <div className={`bodyContainer ${isOpen ? 'isOpen' : ''}`}>
        {accordionContent.body.map(({ bodyHeading, bodyText }, index) => {
          return (
            <div key={index}>
              {bodyHeading ? <h4>{bodyHeading}</h4> : null}
              <ol>
                {bodyText.map((text, index) => (
                  <li key={index}>
                    <p>{text}</p>
                  </li>
                ))}
              </ol>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
