(function() {
  //SYSTEM LIBS
  const express = require('express'),
    chalk = require('chalk');

  //CONSTANTS
  const PORT = 8083;

  //VARS
  let app = express();

  //ROUTES
  ///////////////////////////////

  app.get('/', function(req, res) {
    res.send('hello world');
  });

  ///////////////////////////////
  //ROUTES ^


  //Set the app to listen on port 8083
  app.listen(PORT, function() {
    console.log(chalk.yellow("app is listening on port"), chalk.blue(PORT));
  })
}());