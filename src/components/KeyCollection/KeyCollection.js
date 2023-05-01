import React from 'react';
import KeyItem from '../KeyItem/KeyItem';
import './keyCollection.css';

const KeyCollection = () => {
  return (
    <div className="keyCollectionContainer">
      <h3>All Keys</h3>
      <ul>
        <div>
          <KeyItem>ABC1</KeyItem>
          <KeyItem>K44</KeyItem>
          <KeyItem>PZA</KeyItem>
          <KeyItem>JJ8</KeyItem>
          <KeyItem>ZFC</KeyItem>
          <KeyItem>55V</KeyItem>
        </div>
      </ul>
    </div>
  );
};

export default KeyCollection;
