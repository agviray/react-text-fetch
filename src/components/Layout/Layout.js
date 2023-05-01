import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import '../../styles/global.css';
import './layout.css';

const Layout = () => {
  return (
    <div>
      <header>
        <h1>Text Fetch</h1>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
