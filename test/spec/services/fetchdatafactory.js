'use strict';

describe('Service: FetchDataFactory', function () {

  // load the service's module
  beforeEach(module('cheapsharkProjectAngularApp'));

  // instantiate service
  var FetchDataFactory;
  beforeEach(inject(function (_FetchDataFactory_) {
    FetchDataFactory = _FetchDataFactory_;
  }));

  it('should do something', function () {
    expect(!!FetchDataFactory).toBe(true);
  });

});
