/*global _init */
/*global _getCircles */
/*global Module */

import React, { Component } from 'react';

class BouncingBalls extends Component {
  constructor(props) {
    super(props);
    this.canvasBouncingBalls = React.createRef();
    this.ctx = null;
    this.state = {
      gameSpeed: 30,
      pos: 0,
      id: 0,
      height: 500,
      width: 500
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.ctx = this.canvasBouncingBalls.current.getContext('2d');
    _init();
    const id = window.requestAnimationFrame(this.tick);
    this.setState({ id });
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.state.id);
  }

  updateCanvas() {
    this.ctx.clearRect(0, 0, this.state.width, this.state.height);

    let circles = new Uint32Array(
      Module.buffer,
      _getCircles(this.state.width, this.state.height),
      120
    );
    for (let i = 0; i < circles.length; i += 6) {
      const circle = circles.slice(i, i + 6);

      this.ctx.beginPath();
      this.ctx.arc(circle[0], circle[1], circle[2], 0, 2 * Math.PI, false);
      this.ctx.fillStyle = `rgba(${circle[3]},${circle[4]},${circle[5]},0.8)`;
      this.ctx.fill();
    }
    this.ctx.stroke();
  }

  tick() {
    this.updateCanvas();
    const id = window.requestAnimationFrame(this.tick);
    this.setState({ id });
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h4>Bouncing Balls!</h4>
        <p>Calculations is done with webAssembly.</p>
        <canvas
          className="canvasBouncingBalls"
          ref={this.canvasBouncingBalls}
          width={this.state.width}
          height={this.state.height}
        />
      </div>
    );
  }
}

export default BouncingBalls;
