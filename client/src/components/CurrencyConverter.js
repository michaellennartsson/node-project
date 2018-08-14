import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrencyConverter extends Component {
  componentDidMount() {
    console.log(this.props.exchangeRate);
  }

  renderTableContent() {
    if (this.props.exchangeRate === null) return;
    const rates = this.props.exchangeRate.rates;
    let table = [];

    for (const prop in rates) {
      table.push(
        <tr key={prop}>
          <td>{prop}</td>
          <td>{rates[prop]}</td>
        </tr>
      );
    }

    return table;
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h4>Currency Converter</h4>
        <p>Currencies from http://www.fixer.io</p>
        <div className="row">
          <div className="three columns" style={{ height: '10px' }} />
          <div className="six columns">
            <table className="u-full-width">
              <thead>
                <tr>
                  <th>Currency</th>
                  <th>Exchange Rate</th>
                </tr>
              </thead>
              <tbody>{this.renderTableContent()}</tbody>
            </table>
          </div>
          <div className="three columns" style={{ height: '10px' }} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { exchangeRate: state.exchangeRate };
}

export default connect(mapStateToProps)(CurrencyConverter);
