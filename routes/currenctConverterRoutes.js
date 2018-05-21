const axios = require('axios');
const keys = require('../config/keys');

module.exports = app => {
  app.get('/api/fetch_exchange_rates', (req, res) => {
    axios
      .get('http://data.fixer.io/api/latest', {
        params: {
          access_key: keys.fixerKey,
          symbols: 'SEK, DKK, USD, GBP'
        }
      })
      .then(response => {
        res.send(response.data);
      });
  });
};
