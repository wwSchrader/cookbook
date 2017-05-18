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


    this.allRecipes = recipeService.getRecipes();

    this.name = '';
    this.directions = [''];
    this.ingredients = [''];
    this.selectedCategory = '';
    this.croppedDataUrl = '';

    this.categories = ['Select Category', 'Breakfast', 'Lunch', 'Dinner', 'Dessert'];

    this.updateRecipeViews = function() {
        this.allRecipes = recipeService.getRecipes();
    };

    this.addRecipe = function(){
        var newRecipe = {
            'name': this.name,
            'directions': this.directions,
            'ingredients': this.ingredients,
            'category' : this.selectedCategory,
            'image' : this.croppedDataUrl
        };

        this.allRecipes[this.name] = newRecipe;
        recipeService.saveRecipes(this.allRecipes);
        this.updateRecipeViews();
    };

    this.addIngredientField = function() {
        this.ingredients.push('');
    };

    this.removeIngredientField = function(index) {
        this.ingredients.splice(index, 1);
    };

    this.addDirectionField = function() {
        this.directions.push('');
    };

    this.removeDirectionField = function(index) {
        this.directions.splice(index, 1);
    };

  }]);
