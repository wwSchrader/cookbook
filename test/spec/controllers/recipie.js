'use strict';

describe('Controller: RecipeCtrl', function () {

  // // load the controller's module
  // beforeEach(module('cookBookApp'));

  // var RecipeCtrl,
  //   scope,
  //   mockRecipeSvc;

  // // Initialize the controller and a mock scope
  // beforeEach(inject(function ($controller, $rootScope) {
  //   scope = $rootScope.$new();
  //   RecipeCtrl = $controller('RecipeCtrl', {
  //     $scope: scope,
  //     // place here mocked dependencies

  //   });
  // }));

  // it('added a new recipe', function(){
  //   var newRecipeName = "Apple Pie";
  //   var selectedRecipe, allServiceRecipes;
  //   RecipeCtrl.addRecipe(newRecipeName);
  //   allServiceRecipes = RecipeCtrl.allRecipes
  //   for (selectedRecipe in allServiceRecipes) {
  //     if (selectedRecipe === newRecipeName) {
  //       break;
  //     }
  //   }
  //   expect(selectedRecipe).toBe(newRecipeName);
  // });

  // it('add and remove ingredients to recipe', function(){
  //   var selectedRecipe, allServiceRecipes, ingredient;
  //   var newRecipeName = "Icecream Sunday";
  //   var ingredientsToAdd = ["Icecream", "Strawberries"];

  //   RecipeCtrl.addRecipe(newRecipeName);
  //   for (ingredient in ingredientsToAdd) {
  //     RecipeCtrl.addIngredient(newRecipeName, ingredientsToAdd[ingredient]);
  //   }

  //   //stringify the expected and returned array since matcher won't work otherwise
  //   expect(JSON.stringify(RecipeCtrl.allRecipes[newRecipeName].ingredients))
  //     .toBe(JSON.stringify(ingredientsToAdd));

  //   RecipeCtrl.removeIngredient(newRecipeName, ingredientsToAdd[0]);
  //   ingredientsToAdd.splice(0,1);

  //   expect(JSON.stringify(RecipeCtrl.allRecipes[newRecipeName].ingredients))
  //     .toBe(JSON.stringify(ingredientsToAdd));
  // });

  // it('add and remove directions to recipe', function(){
  //   var selectedRecipe, allServiceRecipes, direction;
  //   var newRecipeName = "Icecream Sunday";
  //   var directionsToAdd = ["Mix Milk", "Add Strawberries"];

  //   RecipeCtrl.addRecipe(newRecipeName);
  //   for (direction in directionsToAdd) {
  //     RecipeCtrl.addDirection(newRecipeName, directionsToAdd[direction]);
  //   }

  //   //stringify the expected and returned array since matcher won't work otherwise
  //   expect(JSON.stringify(RecipeCtrl.allRecipes[newRecipeName].directions))
  //     .toBe(JSON.stringify(directionsToAdd));

  //   RecipeCtrl.removeDirection(newRecipeName, directionsToAdd[0]);
  //   directionsToAdd.splice(0,1);

  //   expect(JSON.stringify(RecipeCtrl.allRecipes[newRecipeName].directions))
  //     .toBe(JSON.stringify(directionsToAdd));
  // });

});
