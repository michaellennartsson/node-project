import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    console.log(this.props.auth);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li className="navbar-item-right">
            <a className="navbar-link margin-left" href="/auth/google">
              Sign In
            </a>
          </li>
        );
      default:
        return (
          <li className="navbar-item-right">
            <a className="navbar-link margin-left" href="/api/logout">
              Sign Out
            </a>
          </li>
        );
    }
  }

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
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
