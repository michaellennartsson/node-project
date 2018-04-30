import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <ul className="navbar-list">
            <li className="navbar-item-left">
              <a className="navbar-link margin-right" href="Home">
                Home
              </a>
            </li>
            <li className="navbar-item-left">
              <a className="navbar-link margin-right" href="Projects">
                Projects
              </a>
            </li>
            <li className="navbar-item-left">
              <a className="navbar-link margin-right" href="About">
                About
              </a>
            </li>
            <li className="navbar-item-right">
              <a className="navbar-link margin-left" href="Sign In">
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
