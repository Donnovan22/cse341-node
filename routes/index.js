const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Emanuel Valencia');
});
routes.get('/test', (req, res) => {
  res.send('Joseph Smith');
});

module.exports = routes;
