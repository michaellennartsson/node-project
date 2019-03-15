const SnakeController = require('../controllers/snake_controller');

module.exports = app => {
  app.get('/api/snake', SnakeController.getHighScores);
  app.put('/api/snake', SnakeController.updateHighScores);
};
