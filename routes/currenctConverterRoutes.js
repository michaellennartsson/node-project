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
        response.data.rates = convertToSEK(response.data);
        res.send(response.data);
      });
  });
};

const convertToSEK = data => {
  const ratesEUR = data.rates;
  const EUR = data.rates['SEK'];
  const DECIMALS = 2;
  let ratesSEK = {};

  for (const rate in ratesEUR) {
    if (rate === 'SEK') {
      ratesSEK['EUR'] = precisionRound(EUR, DECIMALS);
    } else {
      ratesSEK[rate] = precisionRound(EUR / ratesEUR[rate], DECIMALS);
    }
  }

  return ratesSEK;
};

const precisionRound = (number, precision) => {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
};
