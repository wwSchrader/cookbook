'use strict';

/**
 * @ngdoc function
 * @name cookBookApp.controller:RecipieCtrl
 * @description
 * # RecipieCtrl
 * Controller of the cookBookApp
 */
angular.module('cookBookApp')
  .controller('RecipeCtrl', ['recipeService', '$mdDialog', '$scope', function (recipeService, $mdDialog, $scope) {


    this.allRecipes = recipeService.getRecipes();

    this.name = '';
    this.directions = [''];
    this.ingredients = [''];
    this.selectedCategory = '';
    $scope.croppedDataUrl = '';

    this.categories = ['Breakfast', 'Lunch', 'Dinner', 'Dessert'];

    this.updateRecipeViews = function() {
        this.allRecipes = recipeService.getRecipes();
    };

    this.addRecipe = function(){

        if ($scope.form.valid) {
            var newRecipe = {
                'name': this.name,
                'directions': this.directions,
                'ingredients': this.ingredients,
                'category' : this.selectedCategory,
                'image' : $scope.croppedDataUrl
            };

            this.allRecipes[this.name] = newRecipe;
            recipeService.saveRecipes(this.allRecipes);
            this.updateRecipeViews();
        }
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

    this.addPicture = function(ev) {
        console.log('Button Clicked');
        $mdDialog.show({
          controller: 'AddpictureCtrl as picture',
          templateUrl: 'views/addpicture.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: this.customFullscreen
        })
        .then(function(picture) {
            $scope.croppedDataUrl = picture;
        }, function() {
            console.log('dialog canceled');
        });
    };

  }]);
