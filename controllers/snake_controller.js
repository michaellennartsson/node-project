const User = require('../models/User');

module.exports = {
  getHighScores(req, res, next) {
    res.send(req.user);
  },

  updateHighScores(req, res, next) {
    const id = req.user._id;
    const snakeHighScore = req.body;

    User.findByIdAndUpdate({ _id: id }, snakeHighScore)
      .then(() => User.findById({ _id: id }))
      .then(user => res.send(user))
      .catch(next);
  }
};
