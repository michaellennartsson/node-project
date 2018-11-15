const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 3600 * 24 * 30 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(bodyParser.json({ type: 'application/json' }));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/currenctConverterRoutes')(app);
require('./routes/snake_routes')(app);

// Error handling middleware if routes throws an error
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

if (process.env.NODE_ENV === 'production') {
  // Serve production assets like .js or .css
  app.use(express.static('client/build'));

  // Serve index.html file if route is not recognized
  app.get('*', (req, res) => {
    const path = require('path');
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
