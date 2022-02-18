const EmployeeController = require('./Controllers/EmployeeController');

const express = require('express');

const routes = express();

routes.use('/employees', EmployeeController);

module.exports = routes;