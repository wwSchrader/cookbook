'use strict';

describe('Controller: EditrecipeCtrl', function () {

  // load the controller's module
  beforeEach(module('cookBookApp'));

  var EditrecipeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditrecipeCtrl = $controller('EditrecipeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditrecipeCtrl.awesomeThings.length).toBe(3);
  });
});
