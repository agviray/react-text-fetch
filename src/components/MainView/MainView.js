import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
  const [werePairsUpdated, setWerePairsUpdated] = useState(false);

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

  // - Replaces current key/template pairs in localStorage with updated value.
  useEffect(() => {
    localStorage.setItem(
      storedKeyTemplatePairs,
      JSON.stringify(keyTemplatePairs)
    );

    // - Reset activePair to initial value after updating keyTemplatePairs (both in app and in localStorage)
    if (werePairsUpdated === true) {
      setActivePair(initialActivePair);
      setWerePairsUpdated(false);
    }
  }, [keyTemplatePairs]);

  // ******************************************************************************
  // ******************************************************************************
  // - DELETE THIS WHEN READY TO DEPLOY
  // - useEffect for viewing state values only
  // ******************************************************************************
  // ******************************************************************************
  useEffect(() => {
    if (activePair.keyText === null || activePair.templateText === null) {
      console.log(`The activePair is incomplete. Its value is:`);
      return;
    } else {
      console.log(`The activePair is complete! Its value is:`);
      console.log(activePair);
    }
    console.log('Value of werePairsUpdated state is:');
    console.log(werePairsUpdated);
  }, [activePair, werePairsUpdated]);

  // - Updates keyTemplatePairs, resulting in updating stored data in localStorage.
  const saveNewActivePair = (pair) => {
    if (pair.keyText === null || pair.templateText === null) {
      // - Display notification stating to fill out erroneous field?
      return;
    }
    if (pair.id === null) {
      const newPair = { ...pair, id: uuidv4() };
      setKeyTemplatePairs([...keyTemplatePairs, newPair]);
      setWerePairsUpdated(true);
    }
  };

  // - Updates activePair.keyText value.
  const updateActivePairKey = (keyText) => {
    // - Check if keyText is less than 3 characters. (key character minimum is 3)
    if (keyText === '' || keyText.length < 3) {
      setActivePair({ ...activePair, keyText: null });
      return;
    }
    setActivePair({ ...activePair, keyText: keyText });
  };

  // - Updates activePair.templateText value.
  const updateActivePairTemplate = (templateText) => {
    if (templateText === '') {
      setActivePair({ ...activePair, templateText: null });
      return;
    }
    setActivePair({ ...activePair, templateText: templateText });
  };

  return (
    <div className="mainContainer">
      <div>
        <KeyCollection keyTemplatePairs={keyTemplatePairs} />
      </div>
      <div>
        <KeyInput
          onActiveKeyChange={updateActivePairKey}
          werePairsUpdated={werePairsUpdated}
        />
        <Template
          onActiveTemplateChange={updateActivePairTemplate}
          werePairsUpdated={werePairsUpdated}
        />
        <div>
          <span onClick={() => saveNewActivePair({ ...activePair })}>Save</span>
        </div>
      </div>
    </div>
  );
};

export default MainView;
