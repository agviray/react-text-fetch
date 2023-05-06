import React from 'react';
import './instructions.css';
import Accordion from '../Accordion/Accordion';

const savingYourTextContent = {
  heading: 'Saving and editing your text',
  body: [
    {
      bodyHeading: 'Saving',
      bodyText: [
        'Fill in the Key and Template fields, and then click on the Save button.',
        'Your Key/Template pair will now be saved.',
      ],
    },
    {
      bodyHeading: 'Editing and deleting',
      bodyText: [
        'To edit or delete a Key/Template plair, selecte a key name from the All Keys list.',
        'The selected keys name and template will appear in their respective fields, along with additional button options.',
        'Click the Edit button to enter an editing mode. You will now be able to edit the Key or Template.',
        'Make your changes then save them by clicking the Save button.',
        'Click the Delete button to delete a Key/Template pair.',
        'A popup will appear, where you can choose to confirm or cancel your decision.',
      ],
    },
  ],
};

const usingYourTextContent = {
  heading: 'Using your text',
  body: [
    {
      bodyText: [
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, provident.',
        'Lorem ipsum dolor sit amet consectetur adipisicing.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi!',
        'Lorem ipsum dolor sit amet consectetur.',
      ],
    },
  ],
};

const Instructions = () => {
  return (
    <div className="instructionsContainer">
      <div>
        <h2>How it works</h2>
        <Accordion accordionContent={savingYourTextContent} />
        <Accordion accordionContent={usingYourTextContent} />
      </div>
    </div>
  );
};

export default Instructions;
