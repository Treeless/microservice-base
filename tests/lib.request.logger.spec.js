(function() {
  const chai = require('chai');
  const expect = chai.expect;
  const Logger = require('../lib/request.logger.js');

  let logger = null;
  describe("lib.request.logger.spec.js", function() {
    before(function() {
      logger = new Logger();
    });

    after(function() {
      logger = null; //GC
    });

    it("logs a request", function() {
      let request = { query: { foo: "bar" }, params: { bar: "foo" }, url: "/test", "method": "GET" };
      logger.logRequest(request);

      let requests = logger.getRequests();

      expect(requests.length).to.be.greaterThan(0);
      expect(requests[0]).to.contain({ passedValues: Object.assign(request.query, request.params) });
    });
  });

}());