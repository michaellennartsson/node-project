/*global _generateRandom */

import React, { Component } from 'react';

class BouncingBalls extends Component {
  componentDidMount() {
    const rand = _generateRandom;
    console.log(rand());
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h4>Bouncing Balls!</h4>
        <p>Calculations is done with webAssembly.</p>
      </div>
    );
  }
}

export default BouncingBalls;
