'use strict';

/**
 * @ngdoc function
 * @name cookBookApp.controller:SinglerecipeCtrl
 * @description
 * # SinglerecipeCtrl
 * Controller of the cookBookApp
 */
angular.module('cookBookApp')
  .controller('SinglerecipeCtrl', ['recipeService', '$stateParams', function (recipeService, $stateParams) {
    this.aRecipe = recipeService.getSingleRecipe($stateParams.id);

    this.deleteRecipe = function(recipeName) {
        recipeService.removeRecipe(recipeName);
    };

  }]);
