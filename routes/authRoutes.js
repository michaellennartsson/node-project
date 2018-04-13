const passport = require('passport');

module.exports = app => {
  // String 'google' is connected internaly to GoogleStrategy via passport so when
  // visiting /auth/google/ use the GoogleStrategy
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // Callback for response from google, containing code from google
  // calling callback, second argument, in GoogleStrategy
  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
