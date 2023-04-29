import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link to="main">Main</Link>
          </li>
          <li>
            <Link to="about">about</Link>
          </li>
          <li>
            <Link to="instructions">Instructions</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
