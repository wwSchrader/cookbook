'use strict';

describe('Controller: RecipieCtrl', function () {

  // load the controller's module
  beforeEach(module('cookBookApp'));

  var RecipieCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecipieCtrl = $controller('RecipieCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RecipieCtrl.awesomeThings.length).toBe(3);
  });
});
