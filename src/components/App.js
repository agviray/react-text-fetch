import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Main from './Main';
import About from './About';
import Instructions from './Instructions';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="main" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="instructions" element={<Instructions />} />
      </Route>
    </Routes>
  );
}

export default App;
