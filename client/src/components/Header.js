import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
              <Link to="/" className="navbar-link margin-right">
                Home
              </Link>
            </li>
            <li className="navbar-item-left">
              <Link to="/projects" className="navbar-link margin-right">
                Projects
              </Link>
            </li>
            <li className="navbar-item-left">
              <Link to="/about" className="navbar-link margin-right">
                About
              </Link>
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
