import React from 'react';
import KeyCollection from '../KeyCollection/KeyCollection';
import KeyInput from '../KeyInput/KeyInput';
import Template from '../Template/Template';
import './mainView.css';

const MainView = () => {
  return (
    <div className="mainContainer">
      <div>
        <KeyCollection />
        <KeyInput />
        <Template />
      </div>
    </div>
  );
};

export default MainView;
