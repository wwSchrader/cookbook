'use strict';

/**
 * @ngdoc service
 * @name cookBookApp.recipeService
 * @description
 * # recipeService
 * Service in the cookBookApp.
 */
angular.module('cookBookApp')
  .service('recipeService', ['localStorageService', function (localStorageService) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.getRecipes = function(){
        var recipes = localStorageService.get('cookBookApp');

        if (recipes === null) {
            recipes =  {};
        }

        return recipes;
    };

    this.saveRecipes = function(recipeList) {
        localStorageService.set('cookBookApp', recipeList);
    };

    this.getSingleRecipe = function(recipeName) {
        var recipes = localStorageService.get('cookBookApp');

        return recipes[recipeName];

    };
  }]);
