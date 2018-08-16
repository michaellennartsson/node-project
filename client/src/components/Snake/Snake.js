import React, { Component } from 'react';

// gameboard dimensions in px
const WIDTH = 200;
const HEIGHT = 400;

class Snake extends Component {
  constructor(props) {
    super(props);
    this.handleKey = this.handleKey.bind(this);
    this.state = {
      key: 0,
      timer: 0,
      gameSpeed: 1000,
      x: 0,
      headPos: {
        x: 0,
        y: 0
      }
    };
    this.canvas = React.createRef();
    this.ctx = null;
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKey);
    this.timerID = setInterval(() => this.tick(), this.state.gameSpeed);
    this.ctx = this.canvas.current.getContext('2d');
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKey);
    clearInterval(this.timerID);
  }

  tick() {
    let headPos = this.state.headPos;
    switch (this.state.key) {
      case 37:
        headPos.x = headPos.x - 20;
        break;
      case 38:
        headPos.y = headPos.y - 20;
        break;
      case 39:
        headPos.x = headPos.x + 20;
        break;
      case 40:
        headPos.y = headPos.y + 20;
        break;
      default:
    }
    this.setState({ headPos });

    const timer = this.state.timer + 1;
    this.setState({ timer });

    this.ctx.clearRect(0, 0, WIDTH, HEIGHT);
    this.ctx.beginPath();
    this.ctx.rect(this.state.headPos.x, this.state.headPos.y, 20, 20);
    this.ctx.stroke();

    const newXPpos = this.state.x + 20;
    this.setState({ x: newXPpos });
  }

  handleKey(e) {
    const key = e.keyCode;
    this.setState({ key });
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Snake {this.state.key}</h1>
        <p>{this.state.timer}</p>
        <canvas
          className="canvas"
          ref={this.canvas}
          width={WIDTH}
          height={HEIGHT}
        />
      </div>
    );
  }
}

export default Snake;
