(function() {
  const chai = require('chai');
  const supertest = require('supertest'); //https://github.com/visionmedia/supertest/issues/437

  const app = require('../index.js');
  const expect = chai.expect;

  describe("index.spec.js", function() {
    it("The server has started", function(done) {
      supertest(app.listen())
        .get('/')
        .expect(200)
        .end(done);
    });
  });
}());