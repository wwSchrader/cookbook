'use strict';

describe('Controller: RecipenavbarCtrl', function () {

  // load the controller's module
  beforeEach(module('cookBookApp'));

  var RecipenavbarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecipenavbarCtrl = $controller('RecipenavbarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RecipenavbarCtrl.awesomeThings.length).toBe(3);
  });
});
