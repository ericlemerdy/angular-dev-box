'use strict';

describe('Service: awesomeThings', function () {

  // load the service's module
  beforeEach(module('testurlApp'));

  // instantiate service
  var awesomeThings;
  beforeEach(inject(function (_awesomeThings_) {
    awesomeThings = _awesomeThings_;
  }));

  it('should do something', function () {
    expect(!!awesomeThings).toBe(true);
  });

});
