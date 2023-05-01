import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <div>
          <li>
            <Link to="main">Main</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="instructions">Instructions</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
