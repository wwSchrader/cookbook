'use strict';

/**
 * @ngdoc function
 * @name cookBookApp.controller:RecipieCtrl
 * @description
 * # RecipieCtrl
 * Controller of the cookBookApp
 */
angular.module('cookBookApp')
  .controller('RecipeCtrl', ['recipeService', function (recipeService) {

    this.allRecipes = recipeService.recipes;

    this.addRecipe = function(recipeName){
        var newRecipe = {
            'name': recipeName,
            'directions': [],
            'ingredients': [],
            'category' : 'none'
        };
        recipeService.recipes[recipeName] = newRecipe;
    };


    this.addIngredient = function(recipeName, addedIngredient){
        console.log(recipeService.recipes.recipeName.ingredients.push(addedIngredient));
        recipeService.recipes.recipeName.ingredients.push(addedIngredient);
    };

    this.returnIngredients = function(recipeName){
        return recipeService.recipes.recipeName;
    }

  }]);
