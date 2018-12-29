(function() {
  //SYSTEM LIBS
  const express = require('express'),
    chalk = require('chalk');

  //CONSTANTS
  const config = require('./config');
  const Logger = require('./lib/request.logger.js');

  //VARS
  let app = express();
  let logger = new Logger();

  //ROUTES
  ///////////////////////////////

  app.get('/', function(req, res) {
    logger.logRequest(req);

    res.send("OK");
  });

  ///////////////////////////////
  //ROUTES ^

  if (!module.parent) {
    //Set the app to listen on port specified in config if we are running in production
    app.listen(config.port);
  }

  module.exports = app;
}());