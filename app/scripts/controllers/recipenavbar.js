'use strict';

/**
 * @ngdoc function
 * @name cookBookApp.controller:RecipenavbarCtrl
 * @description
 * # RecipenavbarCtrl
 * Controller of the cookBookApp
 */
angular.module('cookBookApp')
  .controller('RecipenavbarCtrl', ['recipeService', function (recipeService) {
    this.allRecipes = recipeService.getRecipes();
  }]);
