import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import About from './About';
import CurrencyConverter from './CurrencyConverter';
import Home from './Home';
import Header from './Header';
import Snake from './Snake/Snake';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchExchangeRate();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact={true} path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/currency-converter" component={CurrencyConverter} />
            <Route path="/snake" component={Snake} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
