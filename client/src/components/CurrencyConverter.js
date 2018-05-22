import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrencyConverter extends Component {
  componentDidMount() {
    console.log(this.props.exchangeRate);
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h4>Currency Converter</h4>
        Currencies from http://www.fixer.io
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { exchangeRate: state.exchangeRate };
}

export default connect(mapStateToProps)(CurrencyConverter);
