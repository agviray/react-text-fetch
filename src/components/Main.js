import React from 'react';
import KeyCollection from './KeyCollection';
import KeyInput from './KeyInput';
import Template from './Template';

const Main = () => {
  return (
    <div>
      <h1>MainDisplay</h1>
      <div>
        <KeyCollection />
        <KeyInput />
        <Template />
      </div>
    </div>
  );
};

export default Main;
