import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignIn extends Component {
  renderSignIn() {
    //console.log(this.props.auth);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <a className="navbar-link margin-left" href="/auth/google">
            Sign In
          </a>
        );
      default:
        return (
          <a className="navbar-link margin-left" href="/api/logout">
            Sign Out
          </a>
        );
    }
  }

  render() {
    return <li className="navbar-item-right">{this.renderSignIn()}</li>;
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(SignIn);
