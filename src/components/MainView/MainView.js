import React, { useState, useEffect } from 'react';
import KeyCollection from '../KeyCollection/KeyCollection';
import KeyInput from '../KeyInput/KeyInput';
import Template from '../Template/Template';
import './mainView.css';

const storedKeyTemplatePairs = 'storedKeyTemplatePairs';
const initialActivePair = {
  id: null,
  keyText: null,
  templateText: null,
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

  // ******************************************************************************
  // ******************************************************************************
  // - DELETE THIS WHEN READY TO DEPLOY
  // - useEffect for viewing state values only
  // ******************************************************************************
  // ******************************************************************************
  useEffect(() => {
    if (activePair.keyText === null || activePair.templateText === null) {
      console.log(`The activePair is incomplete. Its value is:`);
      console.log(activePair);
      return;
    } else {
      console.log(`The activePair is complete! Its value is:`);
      console.log(activePair);
    }
  }, [activePair]);

  // - Saves active pair to localStorage.
  const saveActivePair = (pair) => {
    // - call setKeyTemplatePairs([...keyTemplatePairs, pair])
  };

  // - Updates activePair.keyText value.
  const updateActivePairKey = (keyText) => {
    if (keyText === '') {
      return;
    }
    setActivePair({ ...activePair, keyText: keyText });
  };

  // - Updates activePair.templateText value.
  const updateActivePairTemplate = (templateText) => {
    if (templateText === '') {
      return;
    }
    setActivePair({ ...activePair, templateText: templateText });
  };

  return (
    <div className="mainContainer">
      <div>
        <KeyCollection />
      </div>
      <div>
        <KeyInput onActiveKeyChange={updateActivePairKey} />
        <Template onActiveTemplateChange={updateActivePairTemplate} />
        <div>
          <span>Save</span>
        </div>
      </div>
    </div>
  );
};

export default MainView;
