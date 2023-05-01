import React from 'react';
import './instructions.css';

const Instructions = () => {
  return (
    <div className="instructionsContainer">
      <div>
        <h2>How it works</h2>
        <ol>
          <div>
            <li>
              <p>Fill in the Key field.</p>
              {/* 

            *** Implement Accordion component for this text? ***

            <p>The Key is case sensitive, and may consist
              of numbers, letters, or a comination of both. The Key must be 3 to
              4 characters long.
              </p> 
            */}
            </li>
            <li>
              <p>Fill in the Template field.</p>
            </li>
            <li>
              <p>Click Save.</p>
            </li>
            <li>
              <p>
                To use a saved template, go to a website and click in a text
                field.
              </p>
            </li>
            <li>
              <p>
                Type one of your saved keys in the field, and press Tab twice.
              </p>
            </li>
            <li>
              <p>The template associated with your key will be displayed.</p>
            </li>
          </div>
        </ol>
      </div>
    </div>
  );
};

export default Instructions;
