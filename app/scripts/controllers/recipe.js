'use strict';

/**
 * @ngdoc function
 * @name cookBookApp.controller:RecipieCtrl
 * @description
 * # RecipieCtrl
 * Controller of the cookBookApp
 */
angular.module('cookBookApp')
  .controller('RecipeCtrl', ['recipeService', 'Upload', '$timeout', function (recipeService, Upload, $timeout) {


    this.allRecipes = recipeService.recipes;

    this.name = '';
    this.directions = [''];
    this.ingredients = [''];
    this.selectedCategory = '';

    this.categories = ['Select Category', 'Breakfast', 'Lunch', 'Dinner', 'Dessert'];
    this.f = '';
    this.errFiles = '';

    this.uploadFiles = function(file, errFiles) {
        this.f = file;
        this.errFile = errFiles && errFiles[0];
        if (file) {
            file.upload = Upload.upload({
                url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                data: {file: file}
            });

            file.upload.then(function (response) {
                $timeout(function () {
                    file.result = response.data;
                });
            }, function (response) {
                if (response.status > 0) {
                    this.errorMsg = response.status + ': ' + response.data;
                }
            }, function (evt) {
                file.progress = Math.min(100, parseInt(100.0 *
                                         evt.loaded / evt.total));
            });
        }
    };

    this.addRecipe = function(){
        var newRecipe = {
            'name': this.name,
            'directions': this.directions,
            'ingredients': this.ingredients,
            'category' : this.selectedCategory,
            'image' : this.f
        };
        recipeService.recipes[this.name] = newRecipe;
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
