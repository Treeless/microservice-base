(function() {
  const expect = require('chai').expect,
    fs = require('fs'),
    importFresh = require('import-fresh');

  let configJSON = fs.readFileSync(__dirname + "/../config/config.json");
  configJSON = JSON.parse(configJSON);

  describe("config.spec.js", function() {
    it("uses development config by default", function() {
      let config = require('../config');
      expect(config.port).to.eq(configJSON.development.port);
    });

    it("use production config in `production`", function() {
      process.env.NODE_ENV = "production";
      let productionConfig = importFresh('../config');
      expect(productionConfig.port).to.eq(configJSON.production.port);
      process.env.NODE_ENV = "development";
    });
  });
}());