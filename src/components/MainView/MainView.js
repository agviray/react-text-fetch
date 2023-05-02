import React, { useState, useEffect } from 'react';
import KeyCollection from '../KeyCollection/KeyCollection';
import KeyInput from '../KeyInput/KeyInput';
import Template from '../Template/Template';
import './mainView.css';

const storedKeyTemplatePairs = 'storedKeyTemplatePairs';

const MainView = () => {
  const [keyTemplatePairs, setKeyTemplatePairs] = useState([]);

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
