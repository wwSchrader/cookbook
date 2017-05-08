'use strict';

describe('Directive: fileListener', function () {

  // load the directive's module
  beforeEach(module('cookBookApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<file-listener></file-listener>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fileListener directive');
  }));
});
