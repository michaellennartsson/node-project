import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import SignIn from './SignIn';

const Header = () => {
  const projectsRef = useRef();

  useEffect(() => {
    closePopOver();
  }, []);

  const closePopOver = () => {
    projectsRef.current.className = 'popover';
  };

  const togglePopOver = () => {
    projectsRef.current.className = projectsRef.current.className.includes(
      'open'
    )
      ? 'popover'
      : 'popover open';
  };

  const renderDropDown = () => {
    return (
      <li className="navbar-item-left">
        <Link
          to="#"
          className="navbar-link margin-right"
          data-popover="#codeNavPopover"
          onClick={togglePopOver}
        >
          Projects
        </Link>
        <div
          ref={projectsRef}
          id="codeNavPopover"
          className="popover open"
          onClick={togglePopOver}
        >
          <ul className="popover-list">
            <li className="popover-item">
              <Link to="/currency-converter" className="popover-link">
                Currency Converter
              </Link>
            </li>
            <li className="popover-item">
              <Link to="/snake" className="popover-link">
                Snake
              </Link>
            </li>
            <li className="popover-item">
              <Link to="/bouncing-balls" className="popover-link">
                Bouncing Balls
              </Link>
            </li>
            <li className="popover-item">
              <Link to="/ball-balancing-robot" className="popover-link">
                Ball Balancing Robot
              </Link>
            </li>
          </ul>
        </div>
      </li>
    );
  };

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar-list">
          <li className="navbar-item-left">
            <Link to="/" className="navbar-link margin-right">
              Home
            </Link>
          </li>
          {renderDropDown()}
          <li className="navbar-item-left">
            <Link to="/about" className="navbar-link margin-right">
              About
            </Link>
          </li>
          <SignIn />
        </ul>
      </div>
    </nav>
  );
};

export default Header;
