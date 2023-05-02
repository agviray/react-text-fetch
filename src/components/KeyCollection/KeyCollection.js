import React from 'react';
import KeyItem from '../KeyItem/KeyItem';
import './keyCollection.css';

const KeyCollection = ({ keyTemplatePairs }) => {
  return (
    <div className="keyCollectionContainer">
      <h3>All Keys</h3>
      <ul>
        <div>
          {keyTemplatePairs.map(({ id, keyText }) => (
            <KeyItem key={id}>{keyText}</KeyItem>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default KeyCollection;
