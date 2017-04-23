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

  it('should return added ingredient', function () {
    var ingredient = "Flour";
    RecipieCtrl.addIngredient(ingredient);
    var returnedIngredients = RecipieCtrl.returnIngredients();
    expect(returnedIngredients[0]).toBe(ingredient);
  });
});
