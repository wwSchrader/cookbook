'use strict';

describe('Controller: RecipeCtrl', function () {

  // load the controller's module
  beforeEach(module('cookBookApp'));

  var RecipeCtrl,
    scope,
    mockRecipeSvc;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecipeCtrl = $controller('RecipeCtrl', {
      $scope: scope,
      // place here mocked dependencies

    });
  }));

  it('added a new recipe', function(){
    var newRecipeName = "Apple Pie";
    var selectedRecipe, allServiceRecipes;
    RecipeCtrl.addRecipe(newRecipeName);
    allServiceRecipes = RecipeCtrl.allRecipes
    for (selectedRecipe in allServiceRecipes) {
      if (selectedRecipe === newRecipeName) {
        break;
      }
    }
    expect(selectedRecipe).toBe(newRecipeName);
  });
});
