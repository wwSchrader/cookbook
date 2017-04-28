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
        recipeService.recipes[recipeName].ingredients.push(addedIngredient);
    };

    this.removeIngredient = function(recipeName, ingredientToRemove){
        var index;
        var ingredientsArray = recipeService.recipes[recipeName].ingredients;

        for (index in ingredientsArray) {
            if(ingredientsArray[index] === ingredientToRemove) {
                recipeService.recipes[recipeName].ingredients.splice(index, 1);
                break;
            }
        }
    };

    this.addDirection = function(recipeName, addedDirection){
        recipeService.recipes[recipeName].directions.push(addedDirection);

    };

    this.removeDirection = function(recipeName, directionToRemove) {
        var index;
        var directionsArray = recipeService.recipes[recipeName].directions;

        for (index in directionsArray) {
            if (directionsArray[index] === directionToRemove) {
                recipeService.recipes[recipeName].directions.splice(index, 1);
                break;
            }
        }
    };

  }]);
