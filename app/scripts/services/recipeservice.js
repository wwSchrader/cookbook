'use strict';

/**
 * @ngdoc service
 * @name cookBookApp.recipeService
 * @description
 * # recipeService
 * Service in the cookBookApp.
 */
angular.module('cookBookApp')
  .service('recipeService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.recipes = {
        'Sample Recipe' : {
            'ingredients' : ["First ingredient", "Second ingredient"],
            'directions' : ["First step", "Second step"],
            'category': "Sample Category"
        }
    };
  });
