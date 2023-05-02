import React, { useState, useEffect } from 'react';
import KeyCollection from '../KeyCollection/KeyCollection';
import KeyInput from '../KeyInput/KeyInput';
import Template from '../Template/Template';
import './mainView.css';

const storedKeyTemplatePairs = 'storedKeyTemplatePairs';
const initialActivePair = {
  id: '',
  keyText: '',
  templateText: '',
};
const MainView = () => {
  const [keyTemplatePairs, setKeyTemplatePairs] = useState([]);
  const [activePair, setActivePair] = useState(initialActivePair);

  // - Initial load of stored key/template pairs.
  // - This will either get stored data of key from localStorage, or set the initial
  //   key value pair in localStorage.
  useEffect(() => {
    const storedPairs = JSON.parse(
      localStorage.getItem(storedKeyTemplatePairs)
    );
    if (storedPairs) {
      setKeyTemplatePairs([...storedPairs]);
    } else {
      localStorage.setItem(
        storedKeyTemplatePairs,
        JSON.stringify(keyTemplatePairs)
      );
    }
  }, []);

  // - Saves active pair to localStorage.
  const saveActivePair = (pair) => {
    // - call setKeyTemplatePairs([...keyTemplatePairs, pair])
  };

  // - Updates data of activePair.
  // - activePair value may be a stored pair that user wishes to edit, or
  //   it may be a new pair that the user wants to add.
  const updateActivePair = () => {
    // - Set activePair state.
  };

  return (
    <div className="mainContainer">
      <div>
        <KeyCollection />
      </div>
      <div>
        <KeyInput />
        <Template />
        <div>
          <span>Save</span>
        </div>
      </div>
    </div>
  );
};

export default MainView;
