'use strict';

/**
 * @ngdoc function
 * @name cookBookApp.controller:RecipieCtrl
 * @description
 * # RecipieCtrl
 * Controller of the cookBookApp
 */
angular.module('cookBookApp')
  .controller('RecipeCtrl', function () {
    this.ingredients = [];

    this.addIngredient = function(addedIngredient){
        this.ingredients.push(addedIngredient);
    };

    this.returnIngredients = function(){
        return this.ingredients;
    }

  });
