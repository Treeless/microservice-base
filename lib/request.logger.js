(function() {
  module.exports = function() {
    this.requests = []; //{params: [], url: "", ip: ""}

    //Log a single request and save it
    this.logRequest = function(req) {
      this.requests.push({ passedValues: Object.assign(req.query, req.params), url: req.url, method: req.method });
    };

    //Return requests as JSON
    this.getRequests = function() {
      return this.requests;
    };
  }
}());