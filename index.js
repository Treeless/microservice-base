(function() {
  //SYSTEM LIBS
  const express = require('express'),
    chalk = require('chalk');

  //CONSTANTS
  const config = require('./config');

  //VARS
  let app = express();

  //ROUTES
  ///////////////////////////////

  app.get('/', function(req, res) {
    res.send('hello world');
  });

  ///////////////////////////////
  //ROUTES ^

  if (!module.parent) {
    //Set the app to listen on port specified in config if we are running in production
    app.listen(config.port);
  }

  module.exports = app;
}());