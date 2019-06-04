import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  componentDidMount() {
    this.closePopOver();
  }

  closePopOver() {
    const pop = this.refs.popOver;
    pop.classList.remove('open');
  }

  togglePopOver() {
    const pop = this.refs.popOver;
    pop.classList.toggle('open');
  }

  renderDropDown() {
    return (
      <li className="navbar-item-left">
        <Link
          to="#"
          className="navbar-link margin-right"
          data-popover="#codeNavPopover"
          onClick={this.togglePopOver.bind(this)}
        >
          Projects
        </Link>
        <div
          ref="popOver"
          id="codeNavPopover"
          className="popover open"
          onClick={this.togglePopOver.bind(this)}
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
  }

  renderSignIn() {
    //console.log(this.props.auth);
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
            {this.renderDropDown()}
            <li className="navbar-item-left">
              <Link to="/about" className="navbar-link margin-right">
                About
              </Link>
            </li>
            {this.renderSignIn()}
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
