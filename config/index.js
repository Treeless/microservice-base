(function() {
  //Merges some environment specific config values with the universal config values [API KEYS ETC]
  //You can include config by going `const config = require('/config');` and it will run this below
  var Config = require('./config.json')
  var config = Object.assign(Config[process.env.NODE_ENV || 'development'], Config['all']);

  module.exports = config;
}());