const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

// Create a mongoose collection called users
mongoose.model('users', userSchema);
