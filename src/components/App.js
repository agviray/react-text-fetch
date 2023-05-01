import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import MainView from './MainView/MainView';
import About from './About/About';
import Instructions from './Instructions/Instructions';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<MainView />} />
        <Route path="about" element={<About />} />
        <Route path="instructions" element={<Instructions />} />
      </Route>
    </Routes>
  );
}

export default App;
