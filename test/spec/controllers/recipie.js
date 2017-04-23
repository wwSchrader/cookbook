'use strict';

describe('Controller: RecipeCtrl', function () {

  // load the controller's module
  beforeEach(module('cookBookApp'));

  var RecipeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecipeCtrl = $controller('RecipeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should return added ingredient', function () {
    var ingredient = "Flour";
    RecipeCtrl.addIngredient(ingredient);
    var returnedIngredients = RecipeCtrl.returnIngredients();
    expect(returnedIngredients[0]).toBe(ingredient);
  });
});
