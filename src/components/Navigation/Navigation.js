import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
    <nav>
      <div className="navigationContainer">
        <ul>
          <div>
            <li>
              <Link to="/">My Text</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="instructions">Instructions</Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
