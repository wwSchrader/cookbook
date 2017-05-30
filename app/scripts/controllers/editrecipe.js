'use strict';

/**
 * @ngdoc function
 * @name cookBookApp.controller:EditrecipeCtrl
 * @description
 * # EditrecipeCtrl
 * Controller of the cookBookApp
 */
angular.module('cookBookApp')
  .controller('EditrecipeCtrl', ['recipeService', '$stateParams', function (recipeService, $stateParams)  {
    this.aRecipe = recipeService.getSingleRecipe($stateParams.id);

    this.name = this.aRecipe.name;
    this.directions = this.aRecipe.directions;
    this.ingredients = this.aRecipe.ingredients;
    this.selectedCategory = this.aRecipe.category;
    this.image = this.aRecipe.image;
    this.picFile= this.aRecipe.image;

    this.categories = ['Select Category', 'Breakfast', 'Lunch', 'Dinner', 'Dessert'];

    this.updateRecipe = function() {
        var recipeList = recipeService.getRecipes();

        var updatedRecipe = {
            'name': this.name,
            'directions': this.directions,
            'ingredients': this.ingredients,
            'category' : this.selectedCategory,
            'image' : this.image
        };

        delete recipeList[this.aRecipe.name];

        recipeList[this.name] = updatedRecipe;

        recipeService.saveRecipes(recipeList);
    };

    this.deleteRecipe = function() {
        recipeService.removeRecipe(this.aRecipe.name);
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
