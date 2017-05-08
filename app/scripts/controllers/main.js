'use strict';

/**
 * @ngdoc function
 * @name cookBookApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cookBookApp
 */
angular.module('cookBookApp')
  .controller('MainCtrl', ['recipeService', function (recipeService)  {
    this.allRecipes = recipeService.getRecipes();
  }]);
