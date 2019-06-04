import React, { Component } from 'react';

class BallBalancingRobot extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h4>Master thesis project</h4>
        <p>
          Master thesis project made at Lund University Faculty of Engineering
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/eqhnZmMAU6M"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    );
  }
}

export default BallBalancingRobot;
