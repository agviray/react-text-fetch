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
          <KeyItem>45A</KeyItem>
          <KeyItem>9DCC</KeyItem>
          <KeyItem>UI3</KeyItem>
        </div>
      </ul>
    </div>
  );
};

export default KeyCollection;
