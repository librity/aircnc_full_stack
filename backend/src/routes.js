const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload')
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

const routes = express.Router();

// GET, POST, PUT, DELETE
// req.query = Access query parameters (for filters)
// req.params = Access route parameters (for editing or deleting resources)
// req.body = Access request's body (for creating or editing resources)

routes.post('/sessions', SessionController.store);
routes.post('/spots', SpotController.store);

module.exports = routes;