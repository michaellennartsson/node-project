module.exports = app => {
  app.get('/api/highscore/snake', (req, res) => {
    res.send(req.user);
  });

  app.put('/api/highscore/snake_new', (req, res) => {
    console.log(req.body);
    res.end();
  });
};
