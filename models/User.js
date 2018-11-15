const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  snakeHighScore: Number
});

// Create a mongoose collection called users
const User = mongoose.model('users', userSchema);

module.exports = User;
