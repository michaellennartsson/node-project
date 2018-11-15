const SnakeController = require('../controllers/snake_controller');

module.exports = app => {
  app.get('/api/highscore/snake', SnakeController.getHighScores);
  app.put('/api/highscore/snake', SnakeController.updateHighScores);
};
