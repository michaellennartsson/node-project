import React, { Component } from 'react';

// gameboard dimensions in px
const WIDTH = 200;
const HEIGHT = 400;

class Snake extends Component {
  constructor(props) {
    super(props);
    this.handleKey = this.handleKey.bind(this);
    this.state = {
      gameOver: false,
      key: 0,
      timer: 0,
      gameSpeed: 500,
      apple: {
        x: 100,
        y: 200
      },
      snake: [
        {
          x: 20,
          y: 20
        }
      ],
      head: {
        x: 20,
        y: 20
      }
    };
    this.canvas = React.createRef();
    this.ctx = null;
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKey);
    this.timerID = setInterval(() => this.tick(), this.state.gameSpeed);
    this.ctx = this.canvas.current.getContext('2d');
    this.updateCanvas();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKey);
    clearInterval(this.timerID);
  }

  tick() {
    this.updateHeadPosition();
    this.updateSnake();
    this.checkMove();

    if (this.state.gameOver) return;

    const timer = this.state.timer + 1;
    this.setState({ timer });

    this.updateCanvas();
  }

  updateSnake() {
    var snake = this.state.snake;
    const head = this.state.head;
    snake.unshift(head);
    if (this.eatApple()) {
      this.newApple();
    } else {
      snake.pop();
    }
    this.setState(snake);
  }

  newApple() {
    let apple = { x: 0, y: 0 };
    while (true) {
      apple.x = this.randomGameBoardPosition(WIDTH);
      apple.y = this.randomGameBoardPosition(HEIGHT);
      let result = this.inSnake(this.state.snake, apple);
      if (!result) break;
    }
    this.setState({ apple });
  }

  inSnake(snake, element) {
    return snake.some(part => {
      return part.x === element.x && part.y === element.y;
    });
  }

  randomGameBoardPosition(orientation) {
    const range = orientation / 10 - 1;
    var pos = Math.floor(Math.random() * range + 0);

    if (pos !== 0 && pos % 2 === 1) {
      pos = pos - 1;
    }
    return pos * 10;
  }

  eatApple() {
    return (
      this.state.head.x === this.state.apple.x &&
      this.state.head.y === this.state.apple.y
    );
  }

  checkMove() {
    const snake = this.state.snake.slice();
    snake.splice(0, 1);

    let nextXPos = this.state.head.x;
    let nextYPos = this.state.head.y;
    if (
      nextXPos < 0 ||
      nextYPos < 0 ||
      nextXPos >= WIDTH ||
      nextYPos >= HEIGHT
    ) {
      this.setState({ gameOver: true });
      this.setState({ key: 0 });
    }
    if (this.inSnake(snake, this.state.head)) {
      this.setState({ gameOver: true });
      this.setState({ key: 0 });
    }
  }

  updateCanvas() {
    this.ctx.clearRect(0, 0, WIDTH, HEIGHT);
    this.ctx.fillStyle = 'black';
    this.state.snake.forEach(part => {
      this.ctx.beginPath();
      this.ctx.fillRect(part.x, part.y, 20, 20);
    });

    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.state.apple.x, this.state.apple.y, 20, 20);
    this.ctx.stroke();
  }

  /* Calculates new head position depending on which key that last were pressed */
  updateHeadPosition() {
    var head = {
      x: this.state.head.x,
      y: this.state.head.y
    };

    switch (this.state.key) {
      case 37:
        head.x = head.x - 20;
        break;
      case 38:
        head.y = head.y - 20;
        break;
      case 39:
        head.x = head.x + 20;
        break;
      case 40:
        head.y = head.y + 20;
        break;
      case 82:
        this.setState({ key: 0 });
        this.setState({ gameOver: false });
        head.x = 20;
        head.y = 20;
        this.setState({
          snake: [
            {
              x: 20,
              y: 20
            }
          ]
        });
        this.setState({ apple: { x: 100, y: 200 } });
        this.updateCanvas();
        break;
      default:
    }
    this.setState({ head });
  }

  handleKey(e) {
    const key = e.keyCode;
    const keyCodes = [37, 38, 39, 40, 82];

    // Checks if arrow keys or 'r' has been pressed
    const result = keyCodes.some(keyCode => {
      return keyCode === key;
    });
    if (result) {
      this.setState({ key });
    }
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
