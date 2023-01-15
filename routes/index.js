const routes = require('express').Router();

const controller = require("../controllers");

routes.get('/', controller.sendName);
routes.get('/test', controller.sendAnotherName);

module.exports = routes;
